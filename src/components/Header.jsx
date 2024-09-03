import Name from '.././components/Name.jsx';
import NavTabs from '/./src/components/NavTabs.jsx';
import "/./src/components/styles/header.css";

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