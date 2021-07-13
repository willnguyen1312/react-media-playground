import React from "react";

function App() {
  const handleOnEnded = (
    event: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    console.log(`Ended event - ended value: ${event.currentTarget.ended}`);
  };

  const handleOnPause = (
    event: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    console.log(`Pause event - ended value: ${event.currentTarget.ended}`);
  };

  const handleOnPlay = (
    event: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    console.log(`Play event - ended value: ${event.currentTarget.ended}`);
  };

  const handleOnSeeking = (
    event: React.SyntheticEvent<HTMLVideoElement, Event>
  ) => {
    console.log(`Seeking event - ended value: ${event.currentTarget.ended}`);
  };

  return (
    <main>
      <video
        width="800"
        height="500"
        onEnded={handleOnEnded}
        onPause={handleOnPause}
        onPlay={handleOnPlay}
        onSeeking={handleOnSeeking}
        controls
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
      />
    </main>
  );
}

export default App;
