import React from 'react';
import { Link } from 'react-router-dom';


type Props = {
    item: {
        name: string;
        path: string;
    };
};
 {/* Header daki link componenti sol tarafında */}
const Navlink: React.FC<Props> = ({ item }) => {
    return (
        <Link to={item.path} className=' p-4 text-base font-semibold	'>
            {item.name}
        </Link>
    );
};

export default Navlink;