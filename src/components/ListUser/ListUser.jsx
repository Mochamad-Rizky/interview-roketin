import {
  Loading,
  UserItem
} from "../index";

import './ListUser.css';

const ListUser = ({ users }) => {
  return (
    <section className="list-user">
      <table className="list-user__table">
        <tbody>
          {!users ? <Loading /> : users.map((user, index) => {
            const { name, email, dob, gender, nat, location, picture } = user;
            
            return <UserItem
              key={index}
              firstName={name?.first}
              lastName={name?.last}
              email={email}
              age={dob?.age}
              gender={gender}
              nationality={nat.toLowerCase()}
              address={location}
              profile={picture?.medium}
            />;
          })}
        </tbody>
      </table>
    </section>
  );
};

export default ListUser;
