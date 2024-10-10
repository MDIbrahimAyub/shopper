import React from 'react'
import './newssubscription.css'

const NewsSubscription = () => {
  return (
    <div className='news-subs'>
        <div className="news-subs1">
        <div className="nws-subs2">
            <div className="n-t">
                <h1>Get Exclusive offer On Your Email</h1>
                <p>Subscribe to our NewsLetter and Stay Updated</p>
                <div className="inp">
                    <input type="email" placeholder='Your Email id'/>
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default NewsSubscription