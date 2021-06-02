El presente es un repositorio donde se simula una consola de administración de una empresa viajes, dónde puede generarse altas de aeropuertos, aerolíneas y viajes. 
Los viajes pueden componerse un por un conjunto de vuelos de ida y un conjunto de vuelos de vuelta, y debe permitirse la carga de este listado de vuelos sin discriminar cuáles son vuelos de ida y de vuelta. Al solicitarse posteriormente un listado de viajes deben los mismos visualizarse de forma discriminada. 

* Repositorio backend: https://github.com/zebaseta/trip_crud_backend
* Api de swagger backend: https://springboot-otravo-trips.herokuapp.com/otravo/v1/swagger-ui.html (heroku)
* Frontend: https://master.dcj0k2xihltxq.amplifyapp.com/ (aws)
* Uri de healtcheck (para monitorear mediante un hearthbeat por ejemplo): https://springboot-otravo-trips.herokuapp.com/otravo/v1/actuator/health/custom

Funcionalidades destacadas en el front:
- Login de usuario
- ABM de aerolinea
- ABM de aeropuerto
- Alta de  viaje
- Baja de  viaje
- Ver todos los viajes
- Ver viajes por usuario
- Cache de token, y datos de aeropuertos y aerlonias

Funcionalidades destacadas en el back
- Abm  aerolínea
- Abm aeropuerto
- Ver todas las aerolineas
- Ver todos aeropuertos
- Alta y baja viaje
- Cache de aeropuertos y aerolineas
- Trazabilidad de requests generado tokens por cada request y generando logs con los correspondientes tokens de request
- Seguridad mediante JWT, con un token que expira luego de 1 hora.

