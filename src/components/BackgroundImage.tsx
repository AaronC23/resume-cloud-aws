import prettystars from "../assets/images/bg-image.jpg";

function BackgroundImage({ children }: any) {
    return (
        <>
            <div style={{ backgroundImage: `url(${prettystars})`, backgroundSize: 'cover' }}>
                {children}
            </div>
        </>
    );
}

export default BackgroundImage;
