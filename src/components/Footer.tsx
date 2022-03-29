import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div>
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <img src="data:image/png;base64,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" />
                    </a>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-coolGray-50">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Features</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Integrations</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Pricing</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-coolGray-50">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase dark:text-coolGray-50">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Public API</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Documentation</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Guides</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase dark:text-coolGray-50">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                                </svg>
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
                                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                                </svg>
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
                                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center dark:text-coolGray-400">© 1968 Company Co. All rights reserved.</div>
        </div>
    )
}

export default Footer