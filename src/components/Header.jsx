import Name from '.././components/Name.jsx';
import NavTabs from '/./src/components/NavTabs.jsx';
import "/./src/components/styles/header.css";
import header from '/./src/assets/sky.jpeg';
const styles = {
    header: {
        background: `url(${header})`,
        backgroundSize: '35%',
        color: 'white',
        padding: '20px 0',
        position: 'fixed',
        top: 0,
        width: '500%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
    },
    Nav: {
        display: 'flex',
        flexDirection: 'row-reverse',
        color: 'white',
    },
   
};
export default function Header() { 
    return (
        <header style={styles.header}>
            
            <Name />
            <NavTabs style={styles.Nav} />
        </header>
    )
}