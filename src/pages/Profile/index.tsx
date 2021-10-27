import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import github from './images/github.png';

import { 
  Container, 
  Main, 
  LeftSide, 
  RightSide, 
  Repos, 
  RepoIcon, 
  Tab 
} from './styles';

import ProfileData from '../../Components/ProfileData';
import RepoCard from '../../Components/RapoCard';

import { APIRepo, APIUser } from '../../@types';

interface Data{
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const Profile: React.FC = () => {
  const { username = '' } = useParams();
  const [ data, setData ] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),

    ]).then(async responses => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404){
        return <img src={github} className="github-image"/>
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      setData({
        user,
        repos,
      });
    });
  }, [username]);


  if (data?.error){
    return <h1 className="default-message">{data.error}</h1>
  }

  if (!data?.user || !data?.repos){
    return <img src={github} className="github-image"/>
  }

  const TabContent = () => (
    <div className="content">
      <RepoIcon/>

      <span className="label">Repositorios</span>
      <span className="number">{data.user?.public_repos}</span>
    </div>
  )
  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line"/>
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
            bio={data.user.bio}
          />
        </LeftSide>

        <RightSide> 
          <Tab className="mobile">
            <TabContent/>
            <span className="line"/>
          </Tab>
          <Repos>
            <div>
              {data.repos.map( item => (
                <RepoCard
                  key={item.name}
                  username={item.owner.login}
                  reponame={item.name}
                  description={item.description}
                  language={item.language}
                  stars={item.stargazers_count}
                  forks={item.forks}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;