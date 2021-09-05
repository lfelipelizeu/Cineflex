import { useHistory } from 'react-router-dom';

export default function Header ({ showButton, setShowButton }) {
    let history = useHistory();

    function back () {
        setShowButton(false);
        history.goBack();
    }

    return (
        <header>
            {showButton ? <button onClick={() => back()}>Voltar</button>:""}
            cineflex
        </header>
    );
}