import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'
import { useIsDesktop } from '../../hooks/useMediaQuery'
import BGMEM from '../../assets/images/bg_members2.png'
import BGMobile from '../../assets/images/bg_mobile.png'

// styles
import './MemberDetails.scss'

const MemberDetails = () => {
  const { id } = useParams();
  const {
    data: member,
    error,
    isLoading,
  } = useFetch(`https://my-json-server.typicode.com/xxrobone/db/members/${id}`);

  const desktop = useIsDesktop();

  return (
    <>
       <img src={desktop ? BGMEM : BGMobile} alt="" className='bg_main' />
    <div className='member_details'>     
      {isLoading && <div>Server is thinkin'...</div>}
      {error && <div>{error}</div>}
      {member && (
        <article>
          <h2>{member.name}</h2>
                  <p>{member.desc}</p>
                  <img src={`${member.image}`} alt={member.name} />
        </article>
      )}
    </div>
    
    </>
  );
};

export default MemberDetails;
