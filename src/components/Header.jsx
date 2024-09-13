import Name from '.././components/Name.jsx';
import NavTabs from '/./src/components/NavTabs.jsx';
import "/./src/components/styles/header.css";



export default function Header() { 
    return (
        <header  className='header'>
            <Name />
            <NavTabs/>
        </header>
    )
}