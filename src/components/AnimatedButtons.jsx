import { useState, useRef } from 'react';

export const DirectionalButtonFill = ({ text, link, isFilled, isSmall, rel = undefined, target = '_self' }) => {
    const [ buttonSide, setButtonSide ] = useState('');
    const [ hasHoverClass, setHasHoverClass] = useState(false);
    const button = useRef(null);
    const timeoutRef = useRef(null);

    const handleMouseEnter = (e) => {        

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        const buttonPosition = button.current?.getBoundingClientRect();

        const distances = {
            left: Math.abs(e.clientX - buttonPosition?.left),
            right: Math.abs(e.clientX - buttonPosition?.right),
            top: Math.abs(e.clientY - buttonPosition?.top),
            bottom: Math.abs(e.clientY - buttonPosition?.bottom)
        }

        const closestEdge = Object.keys(distances).reduce((a, b) =>
            distances[a] < distances[b] ? a : b
        );

        setButtonSide(closestEdge);
        setTimeout(() => {setHasHoverClass(true)}, 20);
    }

    const handleMouseLeave = () => {

        timeoutRef.current = setTimeout(() => {           
            setButtonSide('');
            setHasHoverClass(false);
            timeoutRef.current = null;
        }, 301)

    }

    return (
        <a
            href={link}
            ref={button}
            className={`hmd-button-1 ${hasHoverClass ? 'hmd-button-1-hover-class' : ''} ${isFilled ? '' : 'outline'} ${isSmall ? 'small' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-buttonside={buttonSide}
            rel={rel}
            target={target}
        >{text}</a>
    )
}

export const ButtonShake = ({ text, link }) => {
    const [ canHoverEffect, setCanHoverEffect ] = useState(true);

    return (
        <a  
            href={link}
            onClick={() => setCanHoverEffect(false)}
            onMouseLeave={() => setCanHoverEffect(true)}
            className={`hmd-button-2 ${!canHoverEffect ? 'active' : ''}`}
        >{text}</a>
    )
}

export const ButtonShadowExplode = ({ text, link }) => {
    const [ isActive, setIsActive ] = useState(false);

    const handleMouseDown = () => {
        setIsActive(true);
        setTimeout(() => {
            setIsActive(false);
        }, 300)
    }

    return (
        <a  
            href={link}
            onMouseDown={handleMouseDown}
            className={`hmd-button-3 ${isActive ? 'active' : ''}`}
        >{text}</a>
    )
}

export const ButtonPulse = ({ text, link, buttonStyle }) => {
    const [ canHoverEffect, setCanHoverEffect ] = useState(true);

    return (
        <a
            href={link}
            onClick={() => setCanHoverEffect(false)}
            onMouseLeave={() => setCanHoverEffect(true)}
            className={`hmd-button-4 ${!canHoverEffect ? 'active' : ''} ${buttonStyle}`}
        >{text}</a>
    )
}