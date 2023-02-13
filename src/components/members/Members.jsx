import React from 'react'

const Members = () => {
  return (
      <div>
          <div className="members">

<motion.h2
initial={{ opacity: 0, x: -100 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6, delay: 1.4 }}
>Members</motion.h2>
<div className="member">
<h4>name</h4>
  <p className='brodtext'>desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis cum ut repudiandae impedit tempore unde earum assumenda. Architecto repellendus veritatis optio iusto ab magnam, tenetur nesciunt veniam consectetur sapiente?
  
  Lorem ipsum dolor sit amet consectetur adipisicing elit. A assumenda, animi blanditiis magnam ab qui dicta eligendi similique itaque nemo obcaecati, mollitia consequatur. Dolorum eum magnam temporibus ea incidunt, repellendus at, voluptatum exercitationem qui vitae assumenda ex quos necessitatibus obcaecati?
  </p>
</div>
<div className="member">
<h4>name</h4>
<p className='brodtext'>desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis cum ut repudiandae impedit tempore unde earum assumenda. Architecto repellendus veritatis optio iusto ab magnam, tenetur nesciunt veniam consectetur sapiente?</p>
</div>
<div className="member">
<h4>name</h4>
<p className='brodtext'>desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis cum ut repudiandae impedit tempore unde earum assumenda. Architecto repellendus veritatis optio iusto ab magnam, tenetur nesciunt veniam consectetur sapiente?</p>
</div>
<div className="member">
<h4>name</h4>
<p className='brodtext'>desc Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis cum ut repudiandae impedit tempore unde earum assumenda. Architecto repellendus veritatis optio iusto ab magnam, tenetur nesciunt veniam consectetur sapiente?</p>
</div>
</div>
</div>
  )
}

export default Members