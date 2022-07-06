import API_ENDPOINT from "../../global/apiEndpoint";

import './UserItem.css';

const UserItem = ({ firstName, lastName, email, age, gender, nationality, address, profile }) => {
  return (
    <tr className="user__item">
      <td className="user__item-profile">
        <img src={profile} alt={`${firstName} ${lastName}`} width="50px"/>
      </td>
      <td className="user__item-biodata">
        <h3>{`${firstName} ${lastName}`}</h3>
        <p>{email}</p>
      </td>
      <td className="user__item-age">
        <span>{age}</span>
      </td>
      <td className="user__item-gender">
        <span>{gender}</span>
      </td>
      <td className="user__item-country">
        <img src={API_ENDPOINT.GET_FLAG_IMAGE(nationality)} alt="Country" width="50px"/>
      </td>
      <td className="user__item-address">
        <span>{address.street.name} {address.street.number}, {address.city}, {address.country}</span>
      </td>
    </tr>
  )
};

export default UserItem;
