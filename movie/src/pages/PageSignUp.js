import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useGlobal from '../globals/globalState';
import NewUser from '../components/NewUser';


function PageManageUser() {

	const [globalState] = useGlobal();


    return (
        <main>
		    <section>
                
                    <NewUser />
                
            </section>
	    </main>
    );
	
}

export default PageManageUser;
