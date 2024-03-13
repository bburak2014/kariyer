import React from 'react';
import { Link } from 'react-router-dom';


type Props = {
    item: {
        id: string,
        name: string;
        path: string;
    };
};
 {/* Header daki link componenti sağ tarafında */}

const AuthButton: React.FC<Props> = ({ item }) => {
    return (
        <Link to={item.path} className={item.id === '1' ? 'take-packet' : 'login-button'}>
            {item.name}
        </Link>
    );
};

export default AuthButton;