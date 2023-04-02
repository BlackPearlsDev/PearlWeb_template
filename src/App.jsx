import './style/style.css';
import { useEffect, useState, useRef } from 'react';
import Typed from 'typed.js';
import Card from './Components/UI/Card/Index';
import Project from './Components/UI/Project/Index';

// import images
import ArrowDown from './assets/icons/arrow-down.png';
import eclipseSVG from './assets/icons/eclipse.svg';
import githubBg from './assets/github_bg.png';

function App() {

    const [widthScreen, setWidthScreen] = useState(window.innerWidth);
    const [isToggle, setIsToggle] = useState(false);
    const [isSrolling, setIsScrolling] = useState(false);
    const footerRef = useRef(null);
    const el = useRef(null);

    useEffect(() => {
        const handleResize = () => setWidthScreen(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    useEffect(() => {
        window.addEventListener('scroll', reveal);
        return () => window.removeEventListener('scroll', reveal);
    }, []);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Développement web', 'Intégration', 'Référencement', 'Design'],
            typeSpeed: 50,
            backSpeed: 20,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    function reveal() {
        const reveals = document.querySelectorAll(".reveal");
        
        for(let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 150;

            if(elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }

        setIsScrolling(true);
    }

    const handleToggle = () => {
        setIsToggle(!isToggle);
        console.log("toggle:", isToggle);
    }

    const handleArrow = () => {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <header>
                {widthScreen > 1023 ? (
                    <nav>
                        {/* eslint-disable-next-line */}
                        <a href='#' className='head-title'>pearl<span>.</span>Web</a>
                        <div>
                            <a href="#services">Services</a>
                            <a href="#projects">Projets</a>
                            <a href="mailto:jeremydetrain.pro@gmail.com">Contact</a>
                        </div>
                    </nav>
                ) : (
                    <>
                        <div className='nav-phone'>
                            {/* eslint-disable-next-line */}
                            <a href='#' className='head-title'>pearl<span>.</span>Web</a>
                            <button onClick={handleToggle}>
                                {!isToggle ? (
                                <svg viewBox="0 0 1024 1024" display="inline-block" stroke="white" fill="white" width="32px" height="32px">
                                    <path d="M139.636 267.636c0-19.28 15.629-34.909 34.909-34.909h674.909c19.279 0 34.909 15.629 34.909 34.909s-15.63 34.909-34.909 34.909h-674.909c-19.28 0-34.909-15.629-34.909-34.909z"></path><path d="M139.636 512c0-19.279 15.629-34.909 34.909-34.909h674.909c19.279 0 34.909 15.63 34.909 34.909s-15.63 34.909-34.909 34.909h-674.909c-19.28 0-34.909-15.63-34.909-34.909z"></path><path d="M139.636 756.364c0-19.279 15.629-34.909 34.909-34.909h674.909c19.279 0 34.909 15.63 34.909 34.909s-15.63 34.909-34.909 34.909h-674.909c-19.28 0-34.909-15.63-34.909-34.909z"></path>
                                </svg>
                                ) : (
                                    <svg viewBox="0 0 1024 1024" display="inline-block" stroke="white" fill="white" width="32px" height="32px">
                                        <path d="M242.952 242.952c13.633-13.633 35.736-13.633 49.369 0l219.679 219.679 219.681-219.679c13.633-13.633 35.733-13.633 49.366 0s13.633 35.736 0 49.369l-219.676 219.679 219.676 219.681c13.633 13.633 13.633 35.733 0 49.366s-35.733 13.633-49.366 0l-219.681-219.676-219.679 219.676c-13.633 13.633-35.736 13.633-49.369 0s-13.633-35.733 0-49.366l219.679-219.681-219.679-219.679c-13.633-13.633-13.633-35.736 0-49.369z"></path>
                                    </svg>
                                )}
                            </button>

                            <nav className={isToggle ? 'nav-active' : 'nav-inactive'}>
                                <button onClick={handleToggle}><a href="#services" className='link-nav'>Services</a></button>
                                <button onClick={handleToggle}><a href="#projects" className='link-nav'>Projets</a></button>
                                <button onClick={handleToggle}><a href="mailto:jeremydetrain.pro@gmail.com" className='link-nav'>Contact</a></button>
                            </nav>
                        </div>
                    </>
                )}
            </header>
            <main>
                <section className='first-infos'>
                    <div className='about-and-stack'>
                        <article className='content'>
                            <h2>Votre projet au bout des doigts.</h2>
                            <div className='typed-text'>
                                <span ref={el} className='header-text'></span>
                            </div>
                            <p><span className='enterprise-txt'>pearl.Web</span>  est une entreprise de services pour vous accompagner dans vos projets web.</p>
                        </article>

                        {widthScreen > 767 && (
                        <article className='box-stack'>
                            <aside className='content-stack'>
                                <div className='box-svg'>
                                    <svg viewBox="0 0 1024 1024" display="inline-block" stroke="currentcolor" fill="currentcolor" width="32px" height="32px">
                                        <path d="M30.606 27.739h992.969v992.969h-992.969v-992.969zM789.69 860.179c-46.049 0-72.074-23.996-92.058-56.683l-75.838 44.063c27.39 54.117 83.369 95.409 170.046 95.409 88.623 0 154.615-46.009 154.615-130.039 0-77.905-44.767-112.534-124.037-146.587l-23.335-9.97c-40.051-17.377-57.387-28.672-57.387-56.683 0-22.63 17.377-39.967 44.684-39.967 26.77 0 44.023 11.295 60.034 39.967l72.651-46.626c-30.739-54.077-73.356-74.721-132.686-74.721-83.326 0-136.657 53.288-136.657 123.293 0 75.922 44.684 111.874 112.041 140.546l23.335 10.013c42.574 18.618 67.935 29.954 67.935 61.936 0 26.726-24.7 46.049-63.342 46.049v0zM428.085 859.558c-32.067 0-45.428-21.929-60.075-47.995l-75.963 46.009c22.011 46.586 65.289 85.231 139.967 85.231 82.708 0 139.348-43.982 139.348-140.589v-318.579h-93.299v317.338c0 46.629-19.363 58.585-50.021 58.585h0.043z"></path>
                                    </svg>
                                </div>
                                <div className='box-svg'>
                                    <svg viewBox="0 0 931 1024" display="inline-block" stroke="currentcolor" fill="currentcolor" width="32px" height="32px">
                                        <path d="M15.091 27.739l81.894 893.672 367.505 99.297 368.46-99.421 82.019-893.548h-899.878zM736.703 320.043h-431.028l10.269 112.268h410.553l-30.931 336.493-231.076 62.309-230.759-62.309-15.754-172.156h113.082l8.037 87.505 125.456 32.892 0.254-0.062 125.521-32.954 13.011-142.119h-390.4l-30.359-331.465h564.265l-10.076 109.598h-0.065z"></path>
                                    </svg>
                                </div>
                                <div className='box-svg'>
                                    <svg viewBox="0 0 931 1024" display="inline-block" stroke="currentcolor" fill="currentcolor" width="32px" height="32px">
                                        <path d="M464.021 1020.708l-367.097-100.876-81.833-892.093h899.878l-81.833 892.148-369.115 100.821zM218.464 595.779l12.448 159.521 234.090 70.33 229.941-63.429 52.212-552.126h-564.765l9.105 108.446h433.891l-10.721 112.615h-284.514l10.259 106.387h265.092l-15.673 145.777-124.711 33.386-126.784-33.386-8.068-87.357h-111.801v-0.164z"></path>
                                    </svg>
                                </div>
                            </aside>

                            <aside className='content-stack'>
                                <div className='box-svg'>
                                    <svg viewBox="0 0 1024 1024" display="inline-block" stroke="currentcolor" fill="currentcolor" width="32px" height="32px">
                                        <path d="M1023.575 524.325c0-64.636-82.373-125.899-208.688-163.867 29.168-126.467 16.22-227.121-40.876-259.358-13.836-7.613-29.494-11.445-45.348-11.098v44.31c9.309 0 16.8 1.829 23.087 5.203 27.515 15.529 39.471 74.555 30.161 150.533-2.234 18.7-5.874 38.375-10.342 58.457-42.301-10.015-85.231-17.253-128.506-21.668-25.783-34.948-53.912-68.167-84.198-99.434 65.992-60.246 127.929-93.255 170.046-93.255v-44.351c-55.687 0-128.546 38.985-202.234 106.589-73.644-67.157-146.547-105.776-202.193-105.776v44.31c41.913 0 104.054 32.847 170.046 92.686-28.34 29.269-56.683 62.441-83.617 99.231-43.365 4.365-86.373 11.673-128.713 21.871-4.475-19.034-7.996-38.271-10.55-57.644-9.516-76.019 2.234-135.045 29.582-150.737 6.041-3.577 13.943-5.203 23.252-5.203v-44.31c-16.963 0-32.396 3.577-45.718 11.098-56.889 32.237-69.632 132.646-40.298 258.748-125.9 38.211-207.862 99.229-207.862 163.664 0 64.636 82.375 125.899 208.689 163.828-29.168 126.507-16.219 227.16 40.877 259.357 13.157 7.559 28.548 11.137 45.512 11.137 55.687 0 128.546-38.983 202.234-106.589 73.644 67.199 146.503 105.776 202.193 105.776 15.974 0.332 31.75-3.513 45.717-11.137 56.891-32.197 69.632-132.608 40.299-258.709 125.487-37.969 207.447-99.232 207.447-163.663zM760.025 391.68c-7.863 26.581-16.974 52.786-27.307 78.538-16.915-32.327-35.489-63.792-55.647-94.27 28.753 4.186 56.475 9.349 82.994 15.732h-0.040zM667.347 603.474c-15.152 25.994-31.427 51.343-48.78 75.978-60.726 5.26-121.803 5.328-182.539 0.205-34.841-48.898-65.309-100.665-91.065-154.723 25.718-54.182 56.056-106.133 90.692-155.288 60.711-5.27 121.772-5.351 182.499-0.244 16.797 23.659 33.224 48.946 48.988 75.613 15.391 26.016 29.373 52.438 42.117 79.106-12.884 26.993-26.866 53.465-41.913 79.354zM732.719 577.62c10.923 26.627 20.272 53.295 27.927 79.149-26.478 6.383-54.449 11.748-83.369 15.894 20.077-30.754 38.58-62.476 55.442-95.043zM527.506 789.821c-18.826-19.105-37.652-40.367-56.27-63.659 18.205 0.813 36.824 1.421 55.65 1.421 19.031 0 37.857-0.406 56.267-1.421-18.205 23.291-37.028 44.553-55.647 63.659zM376.903 672.662c-27.896-3.972-55.591-9.207-82.995-15.692 7.489-25.65 16.798-52.115 27.308-78.538 8.316 15.853 17.045 31.791 26.562 47.725 9.514 15.894 19.195 31.424 29.125 46.505zM526.469 258.829c18.826 19.106 37.652 40.367 56.27 63.661-18.205-0.813-36.824-1.423-55.65-1.423-19.031 0-37.857 0.406-56.267 1.423 18.205-23.294 37.028-44.554 55.647-63.661zM376.699 375.988c-20.074 30.689-38.577 62.34-55.442 94.841-10.625-25.92-19.945-52.333-27.928-79.149 26.478-6.181 54.449-11.546 83.369-15.692zM193.536 624.938c-71.659-30-117.998-69.393-117.998-100.613s46.338-70.814 117.998-100.613c17.377-7.357 36.409-13.945 56.062-20.083 11.543 38.946 26.727 79.515 45.511 121.102-17.734 39.114-32.733 79.372-44.891 120.491-19.22-5.846-38.137-12.617-56.682-20.285zM302.432 909.092c-27.514-15.447-39.471-74.553-30.161-150.491 2.234-18.699 5.875-38.416 10.343-58.498 39.636 9.554 82.955 16.912 128.507 21.709 25.783 34.946 53.912 68.167 84.195 99.434-65.989 60.245-127.926 93.255-170.046 93.255-7.947 0.084-15.79-1.759-22.837-5.365v-0.043zM782.531 757.583c9.517 75.981-2.234 135.047-29.581 150.739-6.042 3.575-13.942 5.16-23.251 5.16-41.913 0-104.057-32.805-170.046-92.684 30.158-31.136 58.095-64.279 83.614-99.191 43.368-4.363 86.376-11.67 128.714-21.87 4.676 20.083 8.276 39.353 10.55 57.847zM860.439 624.938c-17.377 7.357-36.408 13.945-56.062 20.083-12.372-41.329-27.577-81.79-45.509-121.102 18.618-41.342 33.553-81.709 44.888-120.491 19.282 5.865 38.267 12.636 56.891 20.285 71.658 30 117.996 69.393 117.996 100.613-0.205 31.22-46.545 70.814-118.204 100.613z"></path><path d="M526.888 615.222c24.536 0 48.066-9.576 65.415-26.624 17.349-17.045 27.096-40.166 27.096-64.273s-9.747-47.228-27.096-64.273c-17.349-17.048-40.879-26.624-65.415-26.624s-48.066 9.576-65.415 26.624c-17.349 17.045-27.096 40.166-27.096 64.273s9.747 47.228 27.096 64.273c17.349 17.048 40.879 26.624 65.415 26.624z"></path>
                                    </svg>
                                </div>
                                <div className='box-svg'>
                                    <svg viewBox="0 0 931 1024" display="inline-block" stroke="currentcolor" fill="currentcolor" width="32px" height="32px">
                                        <path d="M464.955 1020.708c-13.967 0-27.018-3.68-39.207-10.045l-123.868-72.003c-18.537-10.097-9.243-13.774-3.657-15.614 25.19-8.208 29.863-9.998 55.916-24.517 2.842-1.84 6.55-0.993 9.396 0.847l94.968 55.693c3.758 1.79 8.431 1.79 11.224 0l371.703-210.693c3.761-1.79 5.589-5.471 5.589-10.045v-420.591c0-4.525-1.828-8.205-5.589-9.995l-371.703-209.798c-3.708-1.84-8.378-1.84-11.224 0l-371.804 209.748c-3.708 1.79-5.586 6.415-5.586 9.995v420.541c0 3.631 1.879 8.254 5.586 10.045l101.572 57.533c54.951 27.251 89.485-4.723 89.485-36.551v-415.018c0-5.471 4.622-10.991 11.173-10.991h47.535c5.486 0 11.174 4.574 11.174 10.991v415.068c0 72.055-40.020 114.074-109.902 114.074-21.432 0-38.191 0-85.727-22.872l-97.763-54.651c-11.911-6.78-21.797-16.502-28.668-28.197-6.871-11.692-10.488-24.945-10.488-38.437v-420.591c0-27.348 14.88-52.908 39.156-66.583l371.551-210.693c12.061-6.316 25.529-9.621 39.207-9.621s27.145 3.304 39.207 9.621l371.603 210.693c24.325 13.625 39.154 39.235 39.154 66.583v420.591c0 27.3-14.879 52.86-39.154 66.634l-371.603 210.643c-12.238 5.471-26.205 8.204-39.256 8.204zM579.528 731.496c-163.024 0-196.543-72.999-196.543-134.957 0-5.471 4.673-10.991 11.174-10.991h48.448c5.589 0 10.209 3.631 10.209 9.151 7.466 48.283 28.846 72.052 127.677 72.052 78.209 0 111.83-17.402 111.83-58.427 0-23.72-9.396-41.025-131.382-52.86-101.522-9.945-164.852-31.974-164.852-111.29 0-73.843 63.33-117.654 169.574-117.654 119.194 0 177.903 40.231 185.316 127.699-0.087 2.954-1.077 5.812-2.842 8.208-1.88 1.787-4.62 3.627-7.416 3.627h-48.398c-2.392-0.050-4.701-0.878-6.557-2.355-1.859-1.477-3.162-3.516-3.702-5.8-11.224-50.322-40.069-66.634-116.401-66.634-85.777 0-96.039 29.19-96.039 51.070 0 26.407 12.037 34.611 127.677 49.23 114.573 14.572 168.609 35.555 168.609 114.074-1.015 80.31-68.003 125.859-186.384 125.859z"></path>
                                    </svg>
                                </div>
                                <div className='box-svg'>
                                    <svg viewBox="0 0 1024 1024" display="inline-block" stroke="currentcolor" fill="currentcolor" width="32px" height="32px">
                                        <path d="M1011.746 996.541l-20.651-20.030c-9.849-13.275-20.855-25.616-32.889-36.87l-0.205-0.168c-12.142-11.227-24.756-21.904-37.848-32.029-10.488-7.339-24.908-16.179-43.256-26.525-14.885-6.727-26.754-18.897-33.252-34.099l-0.164-0.416-1.949-0.993c8.617-0.869 16.505-2.482 24.064-4.757l-0.934 0.245 23.173-6.495c9.595-3.063 20.691-5.049 32.197-5.505h0.242c12.114-0.496 23.54-2.482 34.434-5.753l-1.018 0.248c5.26-1.322 10.665-2.827 16.223-4.509 5.554-1.685 10.311-3.187 14.268-4.512v-6.994c-3.928-5.986-8.685-12.828-14.268-20.527-5.179-7.199-11.23-13.706-18.010-19.366l-0.202-0.164c-17.048-15.338-34.704-30.183-52.972-44.528-17.126-13.545-34.912-26.196-53.298-37.907l-2.765-1.654c-10.6-7.056-21.83-13.082-33.538-18.004l-1.381-0.496c-12.142-5.021-24.107-10.522-35.899-16.511-4.245-2.116-8.704-3.767-13.293-4.925l-0.447-0.081c-4.586-0.931-8.735-3.392-11.788-6.994l-0.040-0.043c-5.769-7.792-10.612-16.251-14.432-25.2l-0.326-0.829c-3.932-9.353-8.186-18.333-12.766-26.941-9.837-19.366-19.35-39.052-28.539-59.054-9.188-19.999-18.010-40.029-26.466-60.087-5.88-13.352-11.286-26.692-16.22-40.017-4.99-13.582-11.264-26.64-18.742-38.98l0.531 0.95c-16.201-28.272-34.279-55.386-54.111-81.15l1.139 1.573c-18.147-23.395-37.972-45.388-59.314-65.799l-0.323-0.29c-20.989-20.045-43.145-38.784-66.346-56.115l-1.992-1.448c-24.284-17.96-50.843-35.644-79.68-53.053-12.26-7.278-25.467-12.753-39.232-16.263l-1.058-0.248-45.246-11.504-25.571-1.986c-8.51-0.662-17.033-0.993-25.571-0.993-5.757-3.067-11.055-6.955-15.733-11.546-4.521-4.378-9.315-8.456-14.351-12.208l-0.406-0.29c-26.407-15.512-54.22-28.4-83.054-38.486l-3.455-1.076c-7.171-4.176-15.173-6.657-23.414-7.259s-16.508 0.691-24.191 3.783l0.366-0.124c-7.566 3.020-14.384 7.701-19.97 13.709s-9.802 13.196-12.349 21.052l-0.122 0.414c-4.314 10.546-5.716 22.090-4.053 33.388s6.325 21.918 13.485 30.714l-0.081-0.124c14.744 20.002 26.045 35.727 33.905 47.176 5.881 8.028 11.952 16.374 18.213 25.036 5.732 7.78 10.814 16.677 14.92 26.071l0.325 0.869c2.276 4.925 4.269 10.801 5.732 16.843l0.122 0.662c1.301 5.683 2.941 11.863 4.919 18.539 5.881 15.339 11.45 31.064 16.708 47.178 5.732 17.585 12.074 32.483 19.432 46.679l-0.773-1.657c3.93 7.339 7.873 14.513 11.83 21.52s8.212 13.849 12.765 20.527c2.582 3.966 5.912 7.37 9.798 10.013l0.122 0.084c2.036 1.486 3.712 3.426 4.903 5.669s1.863 4.735 1.968 7.283v0.040c-4.797 7.255-7.821 15.568-8.822 24.25l-0.041 0.248c-1.275 9.75-3.356 19.369-6.22 28.762l0.326-1.241c-9.563 29.805-14.38 60.971-14.269 92.324 0 10.678 0.528 21.187 1.626 31.576l-0.122-1.285c2.439 39.644 14.188 76.061 33.010 107.594l-0.569-1.033c8.009 12.207 16.586 22.841 26.059 32.566 5.503 6.302 12.916 10.55 21.062 12.074 8.146 1.52 16.558 0.23 23.9-3.671l-0.203 0.081c7.045-2.526 13.191-7.131 17.658-13.225s7.051-13.402 7.425-20.998v-0.081c1.951-19.617 4.878-37.162 8.903-54.294l-0.528 2.771c1.030-2.793 1.553-5.75 1.544-8.732l-0.080-1.862v0.084c-0.325-3.007 1.476-5.849 5.408-8.527v1.989c3.928 9.353 8.021 18.69 12.276 28.014s8.673 18.665 13.253 28.017c11.993 18.581 24.719 34.8 38.701 49.742l-0.121-0.124c13.911 15.292 29.255 29.165 45.816 41.422l0.894 0.621c8.62 6.706 16.179 13.948 23.009 21.852l0.164 0.164c6.423 7.699 14.106 14.029 22.764 18.789l0.406 0.208v-0.996h1.952c-1.542-3.513-4.093-6.47-7.317-8.481l-0.081-0.043c-2.982-1.673-5.849-3.553-8.577-5.629l0.202 0.124c-5.88-5.986-11.953-12.66-18.212-20.027-6.262-7.367-11.993-14.373-17.197-21.023-13.768-19.366-26.9-39.604-39.393-60.708-12.493-21.107-24.297-42.555-35.409-64.351-5.257-10.678-10.339-21.684-15.245-33.022s-9.663-22.348-14.268-33.022c-2.088-4.341-3.407-9.017-3.904-13.824v-0.205c-0.109-2.275-0.797-4.481-1.995-6.402-1.195-1.921-2.861-3.494-4.835-4.568l-0.081-0.040c-4.654 8.145-10.22 15.714-16.586 22.553l0.041-0.040c-6.529 7.004-11.787 15.13-15.53 24.002l-0.203 0.537c-6.085 15.282-10.040 31.359-11.749 47.756l-0.081 0.788c-1.951 17.684-3.916 35.865-5.895 54.542l-1.951 0.993-0.976 0.993c-5.089-1.040-9.885-3.224-14.035-6.398-4.151-3.171-7.55-7.249-9.95-11.934l-0.081-0.208c-4.933-9.681-9.35-19.202-13.253-28.554-10.65-28.362-16.465-58.368-17.196-88.722v-0.372c-2.112-32.436 1.834-64.987 11.627-95.927l-0.488 1.821c1.951-7.339 6.206-19.698 12.765-37.078s7.873-29.395 3.944-36.045c-1.939-6.582-5.675-12.465-10.773-16.967l-0.041-0.040c-4.859-4.285-9.411-8.918-13.619-13.864l-0.122-0.164c-4.58-6.73-8.998-13.905-13.253-21.52s-8.022-15.118-11.302-22.512c-7.57-18.233-14.006-36.934-19.27-55.99l-0.894-3.683c-5.784-21.293-13.206-42.090-22.197-62.198l1.057 2.648c-4.206-9.826-9.527-19.118-15.855-27.685l0.244 0.331c-6.613-8.994-12.521-17.505-17.725-25.533-6.613-8.663-13.172-17.008-19.676-25.036-6.778-8.357-12.589-17.479-17.318-27.188l-0.366-0.828c-2.080-4.323-3.702-8.859-4.838-13.532l-0.081-0.455c-0.698-2.351-0.882-4.829-0.538-7.26s1.208-4.755 2.53-6.81l-0.041 0.083c0.435-2.238 1.461-4.312 2.968-6 1.646-1.498 3.651-2.525 5.813-2.98h0.081c3.208-2.118 6.895-3.362 10.709-3.616s7.63 0.493 11.081 2.168l-0.122-0.041c8.903 2.566 16.099 5.131 23.132 8.069l-1.464-0.538c12.44 5.352 23.918 10.525 34.433 15.518 12.115 5.877 22.441 12.084 32.197 18.995l-0.732-0.497c5.258 3.338 10.502 7.008 15.733 11.008s10.8 8.015 16.709 12.043h13.781c10.488 0 21.627 0.51 33.417 1.531 11.911 0.952 22.928 3.228 33.417 6.787l-0.976-0.29c19.555 5.918 36.345 12.911 52.279 21.312l-1.666-0.786c16.071 8.332 31.316 17.174 45.736 26.526 23.943 15.187 44.637 30.747 64.109 47.756l-0.689-0.579c20.325 17.711 38.782 35.878 56.1 55.080l0.406 0.496c16.912 18.787 33.050 39.189 47.808 60.584l1.26 1.946c13.579 19.53 27.279 42.127 39.598 65.548l1.707 3.519c3.631 7.18 6.808 14.587 9.511 22.18l0.45 1.365c2.628 7.671 5.567 15.534 8.822 23.589 7.208 16.691 14.932 33.531 23.17 50.527s15.965 33.519 23.173 49.577l21.628 48.044c7.599 16.803 16.099 31.285 25.975 44.653l-0.447-0.621c8.254 8.98 19.27 15.27 31.629 17.464l0.326 0.040c14.96 3.807 27.561 8.111 39.756 13.2l-1.908-0.701c5.812 2.687 13.293 5.545 20.976 8.068l1.626 0.456c8.617 2.69 16.099 6.25 22.969 10.718l-0.366-0.208c13.293 7.574 24.554 15.022 35.288 23.133l-0.853-0.621c11.137 8.332 22.277 16.195 33.417 23.589 5.257 4 14.078 9.834 26.466 17.504 12.384 7.671 18.944 14.842 19.676 21.52-24.908-0.878-49.844 0.326-74.56 3.6l2.278-0.248c-20.641 2.728-40.848 8.152-60.127 16.139l1.626-0.58c-5.108 2.206-10.383 3.99-15.773 5.34l-0.773 0.164c-2.799 0.41-5.384 1.759-7.345 3.838-1.958 2.076-3.181 4.76-3.469 7.624v0.043c2.479 3.143 4.471 6.786 5.815 10.758l0.081 0.248c1.381 4.22 3.050 7.863 5.083 11.255l-0.124-0.248c4.838 8.732 10.041 16.266 15.897 23.217l-0.164-0.208c5.734 7.202 12.198 13.452 19.354 18.789l0.282 0.208c6.613 5.35 13.498 10.854 20.654 16.511 6.544 5.213 13.942 10.346 21.625 14.978l0.977 0.54c11.546 7.199 24.961 14.069 38.946 19.822l1.868 0.661c15.205 6.209 28.256 13.408 40.37 21.976l-0.652-0.456c7.888 4.664 15.748 9.837 23.58 15.518 7.832 5.685 15.366 11.186 22.602 16.511 2.966 2.982 5.57 6.29 7.764 9.892l0.124 0.205c3.748 4.403 8.958 7.246 14.634 7.987h0.121v-1.986c-3.593-2.768-6.218-6.644-7.478-11.050l-0.040-0.164c-0.931-3.984-2.467-7.795-4.555-11.298l0.081 0.168 0.164 0.164zM256.573 201.789c-5.258 0-10.177 0.165-14.757 0.496-4.469 0.293-8.882 1.169-13.131 2.607l0.366-0.124v0.993h1.951c2.629 4 5.935 8.497 9.919 13.49s7.588 9.835 10.814 14.525l15.733 33.023 1.951-0.993c4.578-3.355 8.13-7.96 10.244-13.284l0.081-0.207c2.114-5.752 3.334-12.456 3.334-19.409l-0.041-2.235v0.124c-1.843-1.825-3.333-3.987-4.39-6.373l-0.041-0.124-3.293-7.532c-2.109-3.428-5.124-6.182-8.7-7.946l-0.122-0.041c-3.653-1.776-7.002-4.137-9.919-6.994z"></path>
                                    </svg>
                                </div>
                            </aside>

                            <aside className='content-stack'>
                                <div className='box-svg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" display="inline-block" stroke="currentcolor" fill="currentcolor" width="32px" height="32px">
                                        <path d="M11.622 24.74s-1.23.748.855.962c2.51.32 3.847.267 6.625-.267a10.02 10.02 0 0 0 1.763.855c-6.25 2.672-14.16-.16-9.244-1.55zm-.8-3.473s-1.336 1.015.748 1.23c2.725.267 4.862.32 8.55-.427a3.26 3.26 0 0 0 1.282.801c-7.534 2.244-15.976.214-10.58-1.603zm14.747 6.09s.908.748-1.015 1.336c-3.58 1.07-15.014 1.39-18.22 0-1.122-.48 1.015-1.175 1.7-1.282.695-.16 1.07-.16 1.07-.16-1.23-.855-8.175 1.763-3.526 2.51 12.77 2.084 23.296-.908 19.983-2.404zM12.2 17.633s-5.824 1.39-2.084 1.87c1.603.214 4.755.16 7.694-.053 2.404-.214 4.81-.64 4.81-.64s-.855.374-1.443.748c-5.93 1.55-17.312.855-14.052-.748 2.778-1.336 5.076-1.175 5.076-1.175zm10.42 5.824c5.984-3.1 3.206-6.09 1.282-5.717-.48.107-.695.214-.695.214s.16-.32.534-.427c3.794-1.336 6.786 4.007-1.23 6.09 0 0 .053-.053.107-.16zm-9.83 8.442c5.77.374 14.587-.214 14.8-2.94 0 0-.427 1.07-4.755 1.87-4.916.908-11.007.8-14.587.214 0 0 .748.64 4.542.855z"/><path d="M18.996.001s3.313 3.366-3.152 8.442c-5.183 4.114-1.175 6.465 0 9.137-3.046-2.725-5.236-5.13-3.74-7.373C14.294 6.893 20.332 5.3 18.996.001zm-1.7 15.335c1.55 1.763-.427 3.366-.427 3.366s3.954-2.03 2.137-4.542c-1.656-2.404-2.94-3.58 4.007-7.587 0 0-10.953 2.725-5.717 8.763z"/>
                                    </svg>
                                </div>
                                <div className='box-svg'>
                                    <svg color="white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="42px" height="42px">
                                        <path d="M.38 10.377l-.272-.037c-.048.344-.082.695-.101 1.041l.275.016c.018-.34.051-.682.098-1.02zM4.136 3.289l-.184-.205c-.258.232-.509.48-.746.734l.202.188c.231-.248.476-.49.728-.717zM5.769 2.059l-.146-.235c-.296.186-.586.385-.863.594l.166.219c.27-.203.554-.399.843-.578zM1.824 18.369c.185.297.384.586.593.863l.22-.164c-.205-.271-.399-.555-.58-.844l-.233.145zM1.127 16.402l-.255.104c.129.318.274.635.431.943l.005.01.245-.125-.005-.01c-.153-.301-.295-.611-.421-.922zM.298 9.309l.269.063c.076-.332.168-.664.272-.986l-.261-.087c-.108.332-.202.672-.28 1.01zM.274 12.42l-.275.01c.012.348.04.699.083 1.043l.273-.033c-.042-.336-.069-.68-.081-1.02zM.256 14.506c.073.34.162.682.264 1.014l.263-.08c-.1-.326-.187-.658-.258-.99l-.269.056zM11.573.275L11.563 0c-.348.012-.699.039-1.044.082l.034.273c.338-.041.68-.068 1.02-.08zM23.221 8.566c.1.326.186.66.256.992l.27-.059c-.072-.34-.16-.682-.262-1.014l-.264.081zM17.621 1.389c-.309-.164-.627-.314-.947-.449l-.107.252c.314.133.625.281.926.439l.128-.242zM15.693.572c-.332-.105-.67-.199-1.01-.277l-.063.268c.332.076.664.168.988.273l.085-.264zM6.674 1.545c.298-.15.606-.291.916-.418L7.486.873c-.317.127-.632.272-.937.428l-.015.008.125.244.015-.008zM23.727 11.588l.275-.01a11.797 11.797 0 0 0-.082-1.045l-.273.033c.041.338.068.682.08 1.022zM13.654.105c-.346-.047-.696-.08-1.043-.098l-.014.273c.339.018.683.051 1.019.098l.038-.273zM9.544.527l-.058-.27c-.34.072-.681.16-1.014.264l.081.262c.325-.099.659-.185.991-.256zM1.921 5.469l.231.15c.185-.285.384-.566.592-.834l-.217-.17c-.213.276-.417.563-.606.854zM.943 7.318l.253.107c.132-.313.28-.625.439-.924l-.243-.128c-.163.307-.314.625-.449.945zM18.223 21.943l.145.234c.295-.186.586-.385.863-.594l-.164-.219c-.272.204-.557.4-.844.579zM21.248 19.219l.217.17c.215-.273.418-.561.607-.854l-.23-.148c-.186.285-.385.564-.594.832zM19.855 20.715l.184.203c.258-.23.51-.479.746-.732l-.201-.188c-.23.248-.477.488-.729.717zM22.359 17.504l.244.129c.162-.307.314-.625.449-.945l-.254-.107a11.27 11.27 0 0 1-.439.923zM23.617 13.629l.273.039c.049-.346.082-.695.102-1.043l-.275-.014c-.018.338-.051.682-.1 1.018zM23.156 15.621l.264.086c.107-.332.201-.67.279-1.01l-.268-.063c-.077.333-.169.665-.275.987zM22.453 6.672c.154.303.297.617.424.932l.256-.104c-.131-.322-.277-.643-.436-.953l-.244.125zM8.296 23.418c.331.107.67.201 1.009.279l.062-.268c-.331-.076-.663-.168-.986-.273l-.085.262zM10.335 23.889c.345.049.696.082 1.043.102l.014-.275c-.339-.018-.682-.051-1.019-.098l-.038.271zM17.326 22.449c-.303.154-.613.297-.926.424l.104.256c.318-.131.639-.275.947-.434l.004-.002-.123-.246-.006.002zM4.613 21.467c.274.213.562.418.854.605l.149-.23c-.285-.184-.565-.385-.833-.592l-.17.217zM12.417 23.725l.009.275c.348-.014.699-.041 1.045-.084l-.035-.271c-.336.041-.68.068-1.019.08zM6.37 22.604c.307.162.625.314.946.449l.107-.254c-.313-.133-.624-.279-.924-.439l-.129.244zM3.083 20.041c.233.258.48.51.734.746l.188-.201c-.249-.23-.49-.477-.717-.729l-.205.184zM14.445 23.475l.059.27c.34-.074.68-.162 1.014-.266l-.082-.262c-.325.099-.659.185-.991.258zM21.18.129A2.689 2.689 0 1 0 21.18 5.507 2.689 2.689 0 1 0 21.18.129zM15.324 15.447c0 .471.314.66.852.66.67 0 1.297-.396 1.297-1.016v-.645c-.23.107-.379.141-1.107.24-.735.109-1.042.306-1.042.761zM12 2.818c-5.07 0-9.18 4.109-9.18 9.18 0 5.068 4.11 9.18 9.18 9.18 5.07 0 9.18-4.111 9.18-9.18 0-5.07-4.11-9.18-9.18-9.18zm-2.487 13.77H5.771v-6.023h.769v5.346h2.974v.677zm4.13 0h-.619v-.67c-.405.57-.811.793-1.446.793-.843 0-1.38-.463-1.38-1.182v-3.271h.686v3c0 .52.347.85.893.85.719 0 1.181-.578 1.181-1.461v-2.389h.686v4.33zm-.53-8.393c0-1.484 1.205-2.689 2.689-2.689s2.688 1.205 2.688 2.689-1.203 2.688-2.688 2.688-2.689-1.203-2.689-2.688zm5.567 7.856v.52c-.223.059-.33.074-.471.074-.34 0-.637-.238-.711-.57-.381.406-.918.637-1.471.637-.877 0-1.422-.463-1.422-1.248 0-.527.256-.916.76-1.123.266-.107.414-.141 1.389-.264.545-.066.719-.191.719-.48v-.182c0-.412-.348-.645-.967-.645-.645 0-.957.24-1.016.77h-.693c.041-1 .686-1.404 1.734-1.404 1.066 0 1.627.412 1.627 1.182v2.412c0 .215.133.338.373.338.041-.002.074-.002.149-.017z" fill="white"></path>
                                    </svg>
                                </div>
                                <div className='box-svg'>
                                    <svg color="white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="38px" height="38px">
                                        <path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm0 23.52A11.52 11.52 0 1123.52 12 11.52 11.52 0 0112 23.52zm7.13-9.791c-.206.997-1.126 3.557-4.06 4.942l-1.179-1.325-1.988 2a7.338 7.338 0 01-5.804-2.978 2.859 2.859 0 00.65.123c.326.006.678-.114.678-.66v-5.394a.89.89 0 00-1.116-.89c-.92.212-1.656 2.509-1.656 2.509a7.304 7.304 0 012.528-5.597 7.408 7.408 0 013.73-1.721c-1.006.573-1.57 1.507-1.57 2.29 0 1.262.76 1.109.984.923v7.28a1.157 1.157 0 00.148.256 1.075 1.075 0 00.88.445c.76 0 1.747-.868 1.747-.868V9.172c0-.6-.452-1.324-.905-1.572 0 0 .838-.149 1.484.346a5.537 5.537 0 01.387-.425c1.508-1.48 2.929-1.902 4.112-2.112 0 0-2.151 1.69-2.151 3.96 0 1.687.043 5.801.043 5.801.799.771 1.986-.342 3.059-1.441Z" fill="white"></path>
                                    </svg>
                                </div>
                            </aside>

                            <aside className='content-stack'>
                                <div className='box-svg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Visual Studio Code" role="img" viewBox="0 0 512 512" width="48px" height="48px"><rect width="512" height="512" rx="15%" fill="none"/><filter id="a"><feFlood floodOpacity="0" result="b"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feGaussianBlur stdDeviation="4"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .25 0"/><feBlend in2="b" result="c"/><feBlend in="SourceGraphic" in2="c"/></filter>
                                        <path fill="whitesmoke" d="m423 114-75-37a23 23 0 0 0-26 5L77 306a15 15 0 0 0 0 22l20 18a15 15 0 0 0 20 1l295-224c10-7 24-1 24 12v-1c0-9-5-17-13-20"/><path fill="whitesmoke" d="m423 399-75 36a23 23 0 0 1-26-5L77 207a15 15 0 0 1 0-22l20-19a15 15 0 0 1 20-1l295 224c10 8 24 1 24-12v1c0 9-5 17-13 21" filter="url(#a)"/><path fill="white" d="M348 435a23 23 0 0 1-26-5c9 9 23 3 23-9V92c0-12-14-19-23-10a23 23 0 0 1 27-4l75 36c7 3 12 11 12 20v244c0 9-5 17-12 21"/>
                                    </svg>
                                </div>
                                <div className='box-svg'>
                                    <img src={eclipseSVG} alt="Le logo du logiciel Eclipse" id='eclipse-svg'/>
                                </div>
                            </aside>
                        </article>
                        )}
                    </div>
                    <div className='scrolldown'>
                        <div className="mouse">
                            <div className="mouse__wheel">
                            </div>
                        </div>
                    </div>
                </section>

                <div id='services'></div>

                <section className='about reveal'>
                    <h2>Nos services</h2>
                    <div className='card-pos'>
                        <Card title='Développement Web' para1='Spécialisé dans le développement web avec HTML, CSS, JavaScript, React et Node.js pour créer des sites web performants et innovants.' path='M565.969 186.68c19.633 3.287 32.894 21.939 29.622 41.661l-96.093 579.223c-3.272 19.721-21.839 33.043-41.469 29.757-19.631-3.286-32.893-21.937-29.621-41.663l96.094-579.22c3.272-19.721 21.839-33.044 41.467-29.757zM345.293 341.596c14.073 14.138 14.073 37.059 0 51.196l-118.66 119.208 118.66 119.208c14.073 14.136 14.073 37.059 0 51.195-14.073 14.141-36.889 14.141-50.962 0l-144.141-144.803c-14.073-14.141-14.073-37.059 0-51.2l144.141-144.804c14.073-14.138 36.889-14.138 50.962 0zM678.707 341.596c14.071-14.138 36.887-14.138 50.963 0l144.137 144.804c14.075 14.141 14.075 37.059 0 51.2l-144.137 144.803c-14.075 14.141-36.892 14.141-50.963 0-14.071-14.136-14.071-37.059 0-51.195l118.658-119.208-118.658-119.208c-14.071-14.137-14.071-37.059 0-51.196z'/>
                        <Card title='Intégration' para1='Transformez vos idées ou vos maquettes en un site web fonctionnel et attractif.' path='M884.364 372.364v372.364c0 77.121-62.515 139.636-139.636 139.636h-465.455c-77.119 0-139.636-62.515-139.636-139.636v-372.364c0.002-15.505 5.165-30.882 15.192-43.479l129.662-162.909c13.246-16.643 33.357-26.339 54.628-26.339h345.766c21.271 0 41.379 9.696 54.626 26.339l129.662 162.909c10.031 12.597 15.192 27.974 15.192 43.479zM814.545 744.727v-325.818h-605.090l-0 325.818c0 38.558 31.259 69.818 69.818 69.818h465.455c38.558 0 69.818-31.26 69.818-69.818zM546.909 209.455v139.636h249.116l-111.141-139.636h-137.975zM477.091 349.091v-139.636h-137.973l-111.139 139.636h249.113z'/>
                        <Card title='Design' para1='Créez une identité visuelle unique pour votre entreprise pour des visuels percutants et mémorables.' path='M215.785 808.215l9.306-148.941c4.634-74.161 62.679-139.050 134.341-154.871 10.994-37.581 33.047-67 46.109-80.063 0.396-0.396 0.801-0.781 1.215-1.156l220.154-199.206c1.043-0.943 2.122-1.805 3.235-2.587 24.25-21.74 55.222-35.95 88.297-38.016 35.952-2.246 67.593 10.277 89.698 32.345 22.072 22.107 34.593 53.748 32.344 89.699-2.067 33.077-16.272 64.046-38.014 88.295-0.782 1.113-1.648 2.195-2.588 3.237l-199.205 220.154c-0.377 0.414-0.763 0.819-1.159 1.215-13.042 13.042-42.384 35.044-79.877 46.057-15.746 71.75-80.687 129.894-154.915 134.535l-148.942 9.304zM368.217 743.056c51.411-3.212 95.692-47.495 98.904-98.904s-35.86-90.484-87.271-87.273c-51.412 3.212-95.693 47.495-98.905 98.904l-3.349 53.597 38.362-38.363c11.587-11.59 29.27-12.693 39.494-2.467 10.225 10.221 9.12 27.904-2.468 39.494l-38.362 38.363 53.595-3.351zM579.914 337.149l-137.855 124.736c-6.312 6.507-17.57 21.578-25.233 40.871 54.316 9.314 95.006 49.953 104.39 104.239 19.237-7.666 34.267-18.893 40.76-25.19l124.737-137.855 73.667-81.879 1.597-1.684c12.949-14.004 21.448-32.109 22.658-51.479 1.28-20.527-5.865-38.595-18.455-51.227-12.632-12.592-30.701-19.736-51.228-18.453-19.368 1.21-37.474 9.708-51.479 22.657l-1.68 1.597-81.878 73.666z'/>
                    </div>
                </section>

                <div className='div-separator'></div>

                <div id='projects'></div>

                <section className='about little reveal'>
                    <h2>Nos projets</h2>
                    <Project img={githubBg} alt='Screenshot de mon profil Github' title='Github' para="Vous pouvez découvrir tous nos projets de développement web en un seul endroit. Que ce soit des projets personnels ou des projets professionnels, vous trouverez une grande variété de travaux réalisés avec différents langages de programmation tels que HTML, CSS, JavaScript, React et Node.js. Chaque projet est accompagné d'une description détaillée de ses fonctionnalités ainsi que d'un lien pour y accéder. N'hésitez pas à explorer ma page GitHub pour voir mes réalisations et pour en savoir plus sur mon travail."></Project>
                </section>

                {widthScreen > 767 && (
                    <button onClick={handleArrow}><img src={ArrowDown} alt="Flèche directionnelle pour naviguer sur le site." className={isSrolling ? 'arrow-down active' : 'arrow-down'}/></button>
                )}
            </main>
            <footer ref={footerRef}>
                <nav className='nav-footer'>
                    <div className='icon-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <title>Mes créations, tous mes projets open source</title><path fill="#fff" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <a href="https://github.com/BlackPearlsDev" target={'_blank'} rel='noreferrer'>Github</a>
                    </div>

                    <div className='icon-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <title>Prendre contact avec moi</title><path fill="#fff" d="M24 1l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-4.638 6.251c.99-.576 1.864-1.296 2.638-2.17v2.053c-.667.588-1.391 1.096-2.175 1.527l-.463-1.41zm-4.883 3.06c-.978.125-2.355.188-3.479.188v-1.455c1.032 0 2.327-.056 3.229-.169l.25 1.436zm4.184-1.086l-.055.023c-.879.369-1.831.655-2.865.859l-.25-1.438c.982-.197 1.885-.473 2.714-.833l.456 1.389z"/>
                        </svg>
                        <a href="mailto:example@gmail.com" target={'_blank'} rel='noreferrer'>Contact</a>
                    </div>

                    <div className='icon-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <title>Mon profil et CV</title><path fill="#fff" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                        </svg>
                        <a href="https://www.linkedin.com/in/jeremy-detrain-1b543a157/" target={'_blank'} rel='noreferrer'>Linkedin</a>
                    </div>
                </nav>
                <p>pearl.Web © 2023 - ∞</p>
            </footer>
        </>
    );
}

export default App;