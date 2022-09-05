interface IUserFeedbackTemplate {
  uid?: string;
  name?: string;
  email?: string;
  submittedBody?: string;
}

export const userFeedbackTemplate = ({
  uid,
  email,
  submittedBody,
}: IUserFeedbackTemplate) => `
    <b>User Data</b> 
    <br />
    User Id: ${uid}
    <br />
    Email: ${email}
    <br />
    ${submittedBody}
  `;
