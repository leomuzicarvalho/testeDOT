const handleToggle = (e) =>{
    const el = e.target.nextSibling;
    if(el!=null) return el.classList.contains("dd-card-content") ? (el.classList.toggle("dn")) : '';
 }

const DropdownCards = () =>{
    return (
        <div className="dropdown-cards-wrapper">
            <div className="dd-cards">
                <ul>
                    <li className="dd-card" onClick={ (e) => {handleToggle(e)}}>
                        <h2>Lorem Ipsum</h2>
                        <div className="dd-card-content dn">
                            <h2>Lorem Ipsum</h2>
                            <img alt="Dropdown Card" className="dd-card-img" src="/images/nature1.jpg"></img>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </li>
                    <li className="dd-card" onClick={ (e) => {handleToggle(e)}}>
                        <h2>Lorem Ipsum</h2>
                        <div className="dd-card-content dn">
                            <h2>Lorem Ipsum</h2>
                            <img alt="Dropdown Card" className="dd-card-img" src="/images/nature1.jpg"></img>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </li>
                    <li className="dd-card" onClick={ (e) => {handleToggle(e)}}>
                        <h2>Lorem Ipsum</h2>
                        <div className="dd-card-content dn">
                            <h2>Lorem Ipsum</h2>
                            <img alt="Dropdown Card" className="dd-card-img" src="/images/nature1.jpg"></img>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </li>
                    <li className="dd-card" onClick={ (e) => {handleToggle(e)}}>
                        <h2>Lorem Ipsum</h2>
                        <div className="dd-card-content dn">
                            <h2>Lorem Ipsum</h2>
                            <img alt="Dropdown Card" className="dd-card-img" src="/images/nature1.jpg"></img>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </li>
                    <li className="dd-card" onClick={ (e) => {handleToggle(e)}}>
                        <h2>Lorem Ipsum</h2>
                        <div className="dd-card-content dn">
                            <h2>Lorem Ipsum</h2>
                            <img alt="Dropdown Card" className="dd-card-img" src="/images/nature1.jpg"></img>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default DropdownCards;