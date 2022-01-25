import { ScrollView, Text } from "react-native";
import { useSelector } from 'react-redux';

export function TermsConditions() {
  const modes = useSelector(state => state.darkModeReducer.darkMode);

  return (
    <ScrollView style={{marginBottom: "7%"}}>
        <Text style={{fontSize: 17, color:  modes? '#EDEDED' : '#292929'}}>
          Construyendo una Comunidad FindSpot es un lugar donde cualquiera
          puede crear o encontrar experiencias en directo que alimenten sus
          pasiones. Como organización que se preocupa por la diversidad de
          pensamiento y como plataforma global que fomenta una comunidad
          vibrante, nos comprometemos a proporcionar un entorno seguro y claro
          para las experiencias en directo. Es posible que no estemos de acuerdo
          con todas y cada una de las opiniones expresadas en cada evento, pero
          creemos firmemente en el derecho fundamental a la libertad de
          expresión y reunión. Para ayudarte a comprender qué es aceptable en
          FindSpot y lo que se pasa de la raya, creamos este conjunto de Pautas
          de la comunidad: Lo permitido 1. Crear eventos de cualquier tipo Ya
          sea que te interese el vino, la publicidad por email, el baile, la
          codificación o casi cualquier otra cosa, podés crear eventos que
          reúnan a tu comunidad. 2. Compartir contenido respetuoso y
          celebratorio Fomentamos activamente el uso de contenido que celebre
          diferentes culturas, países y voces. Expresate e inspirá a nuestra
          comunidad con tu perspectiva y visión únicas. 3. Publicar contenido
          autogenerado u obtenido debidamente Podés usar contenido en tu página
          del evento que hayas creado vos mismo o que hayas adquirido
          debidamente, siempre que no incite al odio o sea sexualmente
          explícito, ni que infrinja de otro modo estas Pautas. Esto incluye
          fotos, vídeos, logotipos y texto publicitario. 4. Vender artículos
          adicionales relacionados con el evento Sentite libre para vender
          artículos adicionales o alojamiento conjuntamente con las entradas y
          la inscripción para tu evento. Asegurate de cumplir con las normas
          legales asociadas con esos artículos y vendé solo artículos
          adicionales que hayas creado vos mismo o para los que vos y, por
          consiguiente, los participantes de tu evento, tengan permiso para
          usarlos o se los hayan ofrecido para tus fines publicitados. 5.
          Organizar eventos seguros Implementa medidas apropiadas para brindar
          una experiencia segura y tranquila a los participantes. Learn more in
          our Safety Playbook for Events Lo no permitido No podés utilizar
          FindSpot para publicar contenido o participar en ninguna conducta que
          sea (a nuestra exclusiva evaluación) ofensiva, discriminatoria, dañina
          o inapropiada para el público en general, o que creamos que constituye
          o pueda alentar o promover cualquier actividad o resultado dañino,
          violento o ilegal. A continuación, encontrarás más información sobre
          los tipos de actividades, eventos y contenido que no están permitidos
          en o a través de los Servicios de FindSpot. 1. No podés promocionar
          actividades ilegales o inapropiadas FindSpot no puede usarse para
          organizar actividades dañinas o criminales de ningún tipo. No podés
          crear ni promocionar eventos en los Servicios de FindSpot que
          constituyan o promocionen lo siguiente, según lo determine FindSpot:
          Actividad sexual explícita (incluidos servicios de acompañantes) o
          pornografía, Actividad de juego ilegal (ya sea ilegal bajo cualquier
          ley federal o estatal estadounidense o de otros países), Venta o
          ingestión de drogas ilegales, otras sustancias ilegales o
          nutracéuticos, Cannabis, o productos infundidos con cannabis (incluido
          CBD) ofrecidos de forma gratuita, para la venta por parte del
          Organizador, o como parte del precio de la entrada (incluidas muestras
          gratuitas, comida/bebida infundida, bolsas de regalo, descuentos en
          productos y obsequios), uso compartido de cannabis entre los
          asistentes, enseñanzas de cómo cultivar o extraer cannabis (incluidas
          clases de cocina con productos infundidos) o recorridos por un
          dispensario (esto se debe a las regulaciones a nivel federal y esta
          política se aplica incluso en los lugares donde el cannabis es legal),
          Actividades que promuevan principalmente cualquier otro producto o
          servicio comercial, como una "venta comercial", a menos que tal
          promoción esté expresamente indicada a los usuarios de una manera
          legalmente suficiente, como a través de una divulgación destacada de
          "Publicidad", Negocios de comercialización multinivel no expresamente
          autorizados, Servicios de reparación de crédito, Sorteos, rifas o
          regalos que no sean parte de un evento activo listado en FindSpot, o
          que estén prohibidos por ley de otro modo (más información aquí),
          Páginas del evento que promueven la venta o distribución de cualquier
          bien o servicio que no esté directamente relacionado con un evento
          activo listado en FindSpot, Actividades que degraden, acosen,
          intimiden, amenacen o expresen odio hacia cualquier grupo de la
          sociedad, ya sea por motivos de raza, etnia, religión, origen
          nacional, identidad de género, orientación sexual, discapacidad, edad
          o estado de veterano, Venta, distribución (incluidos sorteos,
          subastas, obsequios) o uso ilegal o ferias de (i) armas de fuego,
          partes o equipos de armas de fuego y municiones; o (ii) armas y otros
          dispositivos diseñados para causar daño físico, Actividad terrorista o
          actividad criminal organizada. 2. No podés publicar contenido que
          incite al odio o sea peligroso, ni eventos de organizaciones que
          inciten al odio o sean peligrosas FindSpot no permite en nuestra
          plataforma ningún contenido u organización que promocione o aliente el
          odio, la violencia o el acoso hacia los demás o uno mismo. En
          concreto, prohibimos el contenido o las organizaciones que promocionen
          el odio o el acoso hacia las personas o los grupos por motivos de raza
          u origen étnico, religión, discapacidad, género, edad, nacionalidad,
          condición de veterano, orientación sexual o identidad de género. Esta
          prohibición se extiende a la promoción pública de este tipo de
          conducta prohibida ya sea o no específica al evento o al contenido que
          aparece como parte de los Servicios. 3. No podés publicar contenido
          dañino o ilegal Esperamos que respetes a las personas, las
          organizaciones y los grupos que forman parte de la comunidad de
          FindSpot. No podés distribuir ningún contenido escrito o de otro tipo
          a través de los Servicios de FindSpot que: Imite a una persona o
          entidad, incluidos, entre otros, funcionarios gubernamentales o
          figuras públicas; declare falsamente o tergiverse de otro modo tu
          afiliación con una persona o entidad; o exprese o implique que
          FindSpot respalda las declaraciones que hagas sin aprobación expresa
          por escrito para hacerlo. Promocione o aliente el odio, o contenido
          peligroso (como describimos más arriba). Difame o injurie a otra
          persona. Invada la privacidad de una persona o contenga similitudes de
          una persona sin su permiso. Acose, amenace o busque intimidar a una
          persona (también se describe más arriba). Promocione información
          errónea potencialmente dañina o intencionalmente engañosa. Sea
          fraudulento, engañoso o perjudicial. Esté protegido por derechos de
          autor, marcas registradas o leyes de secreto comercial, salvo que
          tengas el consentimiento expreso por escrito previo del propietario de
          dichos derechos. 4. No podés revender entradas, participar en ventas o
          publicidad prohibidas FindSpot es una plataforma para que los
          vendedores autorizados de entradas ofrezcan entradas para sus propios
          eventos a los miembros del público o les soliciten donaciones para sus
          propias causas en torno a la promoción de un evento. La plataforma no
          puede usarse para revender entradas; vender productos tangibles (salvo
          excepciones); administrar rifas, sorteos, concursos o juegos de azar
          de ninguna naturaleza; o facilitar de otro modo la venta de otra cosa
          que no sea una entrada para tu propio evento (excepciones: productos
          adicionales o alojamiento que se agregaron como una opción en conjunto
          y están asociados con la entrada/inscripción a un evento). No podés
          usar los Servicios de FindSpot para lo siguiente: Recopilar o extraer
          información de los Servicios con fines comerciales, como la reventa de
          información (ya sean datos personales o de otra índole), o crear un
          nuevo conjunto de datos o servicio. Publicar o transmitir publicidad
          no solicitada, material promocional, "correo basura", "correo no
          deseado", "mensajes en cadena", "esquema piramidal", encuestas,
          oportunidades de inversión o cualquier otra forma de petición
          comercial (excepto para los eventos patrocinados en sí). 5. No podés
          recopilar datos de niños sin el consentimiento de los padres Si estás
          organizando un evento al que pueden asistir niños menores de 16 años,
          nuestra política es que el padre/la madre o el tutor legal debe
          inscribir al menor o comprar la entrada en su nombre. No podés usar
          nuestras herramientas o nuestros Servicios para recopilar datos
          directamente de niños menores de 16 años. 6. No podés interferir con
          los Servicios de FindSpot Para mantener la seguridad e integridad de
          los Servicios de FindSpot, se prohíbe lo siguiente: Obstruir o
          interceptar la operación de los Servicios de FindSpot o los servidores
          o las redes que se usan para ofrecer los Servicios, Publicar,
          transmitir a través de los Servicios de FindSpot o liberar en ellos un
          virus, gusano, troyano, bomba lógica, spyware, rootkit, cancelbot u
          otro código, archivo o programa informáticos que sea perjudicial o
          esté diseñado para dañar u obstruir la operación de un hardware,
          software o equipo, o monitorear el uso de estos, Acceder a los
          Servicios o programar una tecnología para que acceda a estos a través
          de un robot o "bot", tecnología de rastreo o extracción, u otra
          tecnología de penetración (con cualquier fin), o Intentar obtener
          acceso no autorizado a los Servicios, otras cuentas, sistemas
          informáticos o redes conectadas a los Servicios, a través de minería
          de contraseñas o cualquier otro medio. 7. No podés infringir los
          derechos de propiedad intelectual de otros No podés subir ni
          distribuir contenido en FindSpot para el que no tengas derecho a
          transmitir conforme a una ley o relación contractual o fiduciaria
          (como información interna, privada y confidencial conocida o revelada
          como parte de relaciones laborales o bajo acuerdos de no divulgación).
          Esto incluye, entre otros, todas las imágenes, logotipos, videos y
          textos cargados en tu página del evento. Asimismo, no podés hacer lo
          siguiente en los Servicios de FindSpot: Quitar los avisos de derechos
          de autor, marca registrada u otro derecho de propiedad de los
          Servicios o cualquier material que aparezca en los Servicios, o
          Reproducir, duplicar, copiar, vender, revender o explotar de otro modo
          con fines comerciales cualquier parte o aspecto de los Servicios. Si
          identificás un uso no autorizado de tu propiedad intelectual en
          FindSpot, seguí el proceso en nuestra Política de marcas comerciales y
          derechos de autor. 8. No podés invadir la privacidad de los demás
          Mostrá consideración y respeto sobre el tipo de información que
          solicitás. No podés usar FindSpot para recopilar números de tarjetas
          de crédito, números de seguro social, información financiera u otros
          datos confidenciales que no sean absolutamente necesarios para la
          administración de tu evento y no estén disponibles para la
          recopilación a través de métodos alternativos. 9. No podés publicar
          contenido explícito FindSpot no es un lugar para pornografía o
          contenido explícito, violento o gráfico. Esto se aplica a todo el
          contenido en nuestro sitio, como imágenes, videos y descripciones.
          Entendemos que no toda desnudez es pornográfica y que cierto contenido
          gráfico puede ser necesario para enfatizar la naturaleza de un evento
          en nuestros Servicios. Quitaremos el contenido que exponga ciertas
          partes del cuerpo o que esté diseñado para celebrar la violencia o
          principalmente ofender a quien lo ve. Además de esto, podemos decidir
          quitar cierto contenido o hacer que sea privado para garantizar cierto
          nivel de seguridad y pertinencia para la mayoría de la comunidad.
          ¿Cómo denunciar y procesar contenido para su revisión? Nuestro
          objetivo es promover una comunidad segura y respetuosa. Si sabés que
          una página del evento o un contenido infringe estas Pautas de la
          comunidad o nuestras condiciones de servicio, contactanos de
          inmediato, o, si se trata de un evento, usá el enlace para denunciar
          este evento en el pie de página del evento. Revisaremos cada denuncia
          y, según su naturaleza, podremos proceder o no. También es importante
          recordar que FindSpot fomenta una comunidad diversa y global; es
          posible que el contenido que considerás ofensivo o controvertido no
          infrinja nuestras Pautas de la comunidad y que no dé como resultado la
          acción que querés. Realmente valoramos tus comentarios y la
          oportunidad de saber qué opina nuestra comunidad. Infracciones de
          nuestras Pautas de la comunidad Si determinamos que el contenido
          infringe nuestras Pautas de la comunidad, podemos eliminar solo la
          parte pertinente, podemos eliminar toda la página del evento o tomar
          una medida alternativa que FindSpot considera adecuada según las
          circunstancias del contenido. Si el abuso de nuestros Servicios es
          serio y severo (en nuestra única evaluación), también podemos
          suspender o cancelar la cuenta correspondiente de FindSpot. Tené en
          cuenta que cierto contenido, aunque no infrinja nuestras Pautas de la
          comunidad, puede no ser apropiado para la mayoría de nuestra
          comunidad. En estos casos, podemos decidir hacer que el contenido sea
          privado o disminuir su distribución de otro modo. Si creemos que
          existe un riesgo legítimo de daño físico a alguien o a un grupo de
          personas, o amenazas directas a la seguridad pública, no solo actuamos
          en nuestro sitio, sino que también trabajaremos con la autoridad
          policial o judicial, según corresponda y según nuestro criterio. Esto
          incluye la denuncia de material sobre abuso sexual infantil a las
          autoridades como el Centro Nacional para Niños Desparecidos y
          Explotados. Si vos o alguien que conocés está en peligro inmediato
          como resultado del contenido publicado en FindSpot, comunicate primero
          con la autoridad policial local. Una vez que hayas denunciado el
          problema ante la autoridad policial, hacé clic aquí para denunciar el
          hecho directamente ante FindSpot.
        </Text>
    </ScrollView>  
  );
}
