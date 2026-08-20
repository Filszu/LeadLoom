//full screen autoplay video
// leadloom_movie1.mp4



export default function TwinsPage() {
    return (

        // ignore previous layout and use full screen
        <div className="flex h-full w-full items-center justify-center">
            <video src={"/imgs/avatars/leadloom_movie1.mp4"} autoPlay loop  className="h-full w-full object-cover" controls/>
        </div>
    );
}