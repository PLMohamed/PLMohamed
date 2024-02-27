"use client";

export default function Main({
    children,
    ref,
    classNameInView,
    classNameNotInView,
    inView,
}) {
    return (
        <article
            ref={ref}
            className={inView ? classNameInView : classNameNotInView}
            id="about"
        >
            {children}
        </article>
    );
}
