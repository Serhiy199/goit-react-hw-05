import { ColorRing } from 'react-loader-spinner';

export default function Loader() {
    return (
        <p>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['##AA11C4', '#4B11C4', '#115CC4', '#11C46C', '#C4C411']}
            />
        </p>
    );
}
