import React from 'react';
import styled from 'styled-components';

const LaunchDiv = styled.div`
  font-family: 'PT Sans', serif;
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    margin-top: 10px;
    
    nav {
      align-self: flex-end;
      a {
        padding: 0 3px;
        text-decoration: none;
        color: royalblue;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  
  main {
    background: #005d79;
    border-radius: 10px;
    margin: 10px 0;
    color: white;
    
    h2 {
      width: 100%;
      text-align: left;
      padding-left: 15px;
    }
    
    .numAndDate {
      display: flex;
      justify-content: space-between;
      width: 100%;
      background: #59807f;
      color: beige;
      padding: 3px;
      box-sizing: border-box;
    }
    
    .bulk {
      width: 100%;
      
      div.videoContainer {
        background: #111;
        margin: 10px 0;
      }
      
      div.imageContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        
        .image {
          width: 15%;
          
          img.launch {
            max-width: 100%;
            height: auto;
          }
        }
      }
    }
  }
`;


export default function Launch(props) {
  const { launchData, getLaunchData } = props;

  if(!launchData.hasOwnProperty('flight_number')) {
    getLaunchData();
    return <div>Loading...</div>;
  }

  return (
      <LaunchDiv>
        <header>
          <div className='logoContainer'>
            <img src={launchData.links.mission_patch_small} alt='Mission Patch' />
          </div>
          <nav>
            <a href={launchData.links.reddit_campaign}>Reddit Campaign</a>
            <a href={launchData.links.presskit}>Presskit</a>
            <a href={launchData.links.article_link}>Article</a>
            <a href={launchData.links.wikipedia}>Wikipedia</a>
          </nav>
        </header>
        <main>
          <h2>{launchData.mission_name}</h2>
          <div className='numAndDate'>
            <span>Flight #: {launchData.flight_number}</span>
            <span>{launchData.launch_date_local}</span>
          </div>
          <div className='bulk'>
            <h4>{launchData.rocket.rocket_type} {launchData.rocket.rocket_name}</h4>
            <span>Ships</span>
            <div>
                {launchData.ships.map(ship => <p>{ship}</p>)}
            </div>
            <div>
              <h5>Launch Site {launchData.launch_site.site_name}</h5>
              <span><i>{launchData.launch_site.site_name_long}</i></span><br />
              <span>Success: {launchData.launch_success ? 'Yes!' : 'No'}</span>
              <p className='description'>{launchData.details}</p>
              <div>

                <div className='links'>
                  <div className='videoContainer'>
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
                  <div className='imageContainer'>
                    {launchData.links.flickr_images.map(img_url => <div className='image'><img src={img_url} className='launch' alt='Launch' /></div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </LaunchDiv>
  );
}