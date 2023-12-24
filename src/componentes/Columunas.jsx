export const Columunas = ({id, username, email,handlerRemoveUser,handlerUserSelectedForm}) => {


    return(
      <>
          <tr key={id}>
              <td>{id}</td>
              <td>{username}</td>
              <td>{email}</td>
              <td>
                  <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => handlerUserSelectedForm({
                          id,
                          username,
                          email
                      })}
                  >
                      update
                  </button>
              </td>
              <td>
                  <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handlerRemoveUser(id)}
                  >
                      remove
                  </button>
              </td>
          </tr>
      </>

    )
}