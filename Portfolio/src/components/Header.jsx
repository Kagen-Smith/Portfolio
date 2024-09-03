import Name from './name';
import NavTabs from './Navtabs';
import "./styles/header.css";

const styles = {
    header: {
        backgroundColor: 'gray',
        color: 'white',
        padding: '20px 0',
        position: 'fixed',
        top: 0,
        width: '100%',
    },
};
export default function Header() { 
    return (
        <header style={styles.header}>
            <Name />
            <NavTabs />
        </header>
    )
}