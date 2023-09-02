import React from 'react'
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs'
function Social() {
  return (
    <div className="social">
      <a href='https://github.com/prabhajaiswal'   target='blank' ><BsGithub /></a>
      <a href='https://www.linkedin.com/in/prabha-jaiswal-2b72a424a/'   target='blank'><BsLinkedin /></a>
      <a href='https://twitter.com/prabhjaisw23619'   target='blank' ><BsTwitter /></a>
    </div>
  )
}

export default Social;
