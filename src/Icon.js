import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faGithub,
    faLinkedin,
    faMedium
} from '@fortawesome/free-brands-svg-icons';
import {
    faHome,
    faFile,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';

export function Home() {
    return <FontAwesomeIcon icon={faHome} />;
  }

  export function File() {
    return <FontAwesomeIcon icon={faFile} />;
  }

  export function Contact() {
    return <FontAwesomeIcon icon={faEnvelope} />;
  }

  export function Github() {
    return <FontAwesomeIcon icon={faGithub} />;
  }

  export function Linkedin() {
    return <FontAwesomeIcon icon={faLinkedin} />;
  }

  export function Medium() {
    return <FontAwesomeIcon icon={faMedium} />;
  }