import React from 'react'

const FormSubscribe = () => {
    return (
        <form action="#" className="subscribe__form">
            <div className="row">
                <div className="col-md-10 col-lg-12 col-sm-10">
                    <div className="input input--icon  ">
                        <i className="fontello-mail input__icon"></i>
                        <input type="text" name="subscribe-email" className="input__field" placeholder="Your e-mail address" id="subscribe-email" />
                    </div>
                </div>
                <div className="col-md-8 col-lg-6 col-sm-8">
                    <div className="dropdown dropdown--full dropdown--icon  ">
                        <div className="dropdown__label">
                            <i className="fontello-cd dropdown__icon"></i> Frequency </div>
                        <ul className="dropdown__list">
                            <li className="dropdown__item">Weekly</li>
                            <li className="dropdown__item">Monthly</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-6">
                    <div className="button button--subscribe  ">
                        <input type="submit" className="button__input" value="Subscribe" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default FormSubscribe