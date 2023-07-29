const MyAccount = () => {
  return (
    <>
      <h1 className="mb-8 font-medium text-xl">My Account</h1>
      <div className="w-full flex max-w-md flex-col gap-3.5">
        <p>Email: <span className="font-bold">example@gmail.com</span></p>
        <p>Password: <span className="font-bold">12345678</span></p>

        <button
          className="w-full py-3 rounded-lg text-center border border-black"
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default MyAccount;