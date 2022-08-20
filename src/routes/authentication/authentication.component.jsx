import SignUpForm from '../../components/sign-up-form/sign-up-form.components';
import SignInForm from '../../components/sign-in-form/sign-in-form.components';
import './authentication.styles.scss';

const Authentication = () => {
    //setSigninFields(prevState => ({...prevState, [nameOfField]: valueOfField}));

    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUpForm />
        </div>
    );
}

export default Authentication;