return (
  <div className="container">
    <h2>Login</h2>

    <form onSubmit={handleSubmit}>
      <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})}/>
      <button type="submit">Login</button>
    </form>

    <p className="link" onClick={() => navigate("/register")}>
      Don't have an account? Register
    </p>
  </div>
);