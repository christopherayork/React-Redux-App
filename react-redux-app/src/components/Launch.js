import React from 'react';



export default function Launch(props) {
  const { launchData, getLaunchData } = props;

  if(!launchData.hasOwnProperty('flight_number')) {
    getLaunchData();
    return <div>Loading...</div>;
  }

  return (
      <div>
        <h2>{launchData.mission_name}</h2>
        <div>
          <span>Flight #: {launchData.flight_number}</span>
          <span>{launchData.launch_date_local}</span>
        </div>
        <div>
          <h4>{launchData.rocket.rocket_type} {launchData.rocket.rocket_name}</h4>
          <span>Ships</span>
          <div>
              {launchData.ships.map(ship => <p>{ship}</p>)}
          </div>
          <div>
            <h5>Launch Site {launchData.launch_site.site_name}</h5>
            <span><i>{launchData.launch_site.site_name_long}</i></span>
            <span>Success: {launchData.launch_success}</span>
            <p className='description'>{launchData.details}</p>
            <div>
              <img src={launchData.links.mission_patch_small} alt='Mission Patch' />
              <div className='links'>
                <h5>Links</h5>
                <a href={launchData.links.reddit_campaign}>Reddit Campaign</a>
                <a href={launchData.links.presskit}>Presskit</a>
                <a href={launchData.links.article_link}>Article</a>
                <a href={launchData.links.wikipedia}>Wikipedia</a>
                <div>
                  <iframe
                      title='Launch'
                      src={`https://www.youtube.com/embed/${launchData.links.youtube_id}`}
                      width='640'
                      height='390'
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                  />
                </div>
                <div>
                  {launchData.links.flickr_images.map(img_url => <img src={img_url} className='launch' alt='Launch' />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}