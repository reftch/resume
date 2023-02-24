
const award = (date: string, description: string) => {
  return (
    <div className="awards-box">
      <div className="awards-date">
       <h5>{date}</h5>
      </div>
      <div className="description">
        {description}
      </div>
    </div>
  )
}

const Awards = () => {
  return (
    <div className="awards">
      <h2>Awards</h2>
      {award("2020", "Award to the DEV colleague who displayed the best initiative of the year: creating a new Pilot UI, Compart GmbH")}
      {award("2014", "Employee Awards Software Development, Engagepoint, Inc.")}
      {award("2013", "Certificate of Appreciation, Engagepoint, Inc.")}
      {award("2004", "Employee Awards Software Development, State Kiev Design Bureau 'Luch'")}
    </div>
  )
}

export default Awards;