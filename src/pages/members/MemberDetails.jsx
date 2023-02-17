import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'

// styles
import './MemberDetails.scss'

const MemberDetails = () => {
  const { id } = useParams();
  const {
    data: member,
    error,
    isLoading,
  } = useFetch(`https://my-json-server.typicode.com/xxrobone/db/members/${id}`);

  return (
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
  );
};

export default MemberDetails;
