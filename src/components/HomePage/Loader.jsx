import { useContext } from 'react';
import LoaderImg from "../../assets/Loader.png"
import { fetchedDetailsContext } from '../../App';

function Loader() {

     const { isDetailsFetched, setIsDetailsFetched } = useContext(
        fetchedDetailsContext,
      );
    return (
        <>
        <div className={`flex justify-center py-10`}>
            <img src={LoaderImg} className='w-20 animate-spin' alt="loader" />
        </div>
        </>
    );
}

export default Loader;
