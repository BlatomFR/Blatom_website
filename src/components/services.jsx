export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Nos produits</h2>
          <p>
            BLATOM se spécialise dans la création d'applications mobiles. Ils sont conçus en interne grâce à notre expertise.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-4'>
                {' '}

                <img src={d.icon} alt='...' className='service-img' />
                <div className='service-desc'>
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
