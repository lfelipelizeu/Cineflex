export default function Header ({ showButton }) {
    return (
        <header>
            {showButton ? <button>Voltar</button>:""}
            cineflex
        </header>
    );
}