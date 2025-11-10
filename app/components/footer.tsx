export function Footer() {
    return (
        <>
            <div className="w-full px-10 py-5 border-t-4 border-yellow-400">
                <div className="float-left">
                    <a href="/privacy"><p>Privacy-policy</p></a>
                    <a href="/cookies"><p>Cookies</p></a>
                </div>
                <div className="float-right text-right">
                    <p>&copy; 2025 All rights reserved</p>
                    <a href="https://www.mrdevelop.co.uk" target="_blank"><p>Site by MR Develop</p></a>
                </div>
                <div className="clear-both"></div>
            </div>
        </>
    )
}