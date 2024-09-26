import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>Hacker News</h1>
            <nav>
                <ul style={styles.navList}>
                    <li style={styles.navItem}><a href="/">New |</a></li>
                    <li style={styles.navItem}><a href="/">Past |</a></li>
                    <li style={styles.navItem}><a href="/">Comments |</a></li>
                    <li style={styles.navItem}><a href="/">Ask |</a></li>
                    <li style={styles.navItem}><a href="/">Show |</a></li>
                    <li style={styles.navItem}><a href="/">Jobs |</a></li>
                    <li style={styles.navItem}><a href="/">Submit |</a></li>
                    <li style={styles.navItem}><a href="/">Login</a></li>
                </ul>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#ff6600',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        margin: 0,
        color: '#fff',
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        margin: 0,
        padding: 0,
    },
    navItem: {
        marginLeft: '5px',
    },
};

export default Header;