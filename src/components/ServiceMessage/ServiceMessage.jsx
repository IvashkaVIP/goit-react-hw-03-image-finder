export const ServiceMessage = ({ State }) => {
    const { images, searchQuery } = State;
    console.log(State);
    if (searchQuery && !images.length) { return (
      <h1
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          color: '#1500d3',
        }}
      >
        Sorry, no data available on request "{searchQuery}"{' '}
      </h1>
    ); }
    


}

