let coordinates = {}

$(document).ready(function () {
    get_weather();
    render_elements();
})

function get_weather() {
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('source') && searchParams.has('destination')) {
        let source = searchParams.get('source')
        let destination = searchParams.get('destination')
        weather.source_lat = source.split(";")[0]
        weather.source_lon = source.split(";")[1]
        weather.destination_lat = destination.split(";")[0]
        weather.destination_lon = destination.split(";")[1]
    } else {
        alert("Coordinates not selected!")
        window.history.back();
    }
}

function render_elements() {
   $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.destination_lat}&lon=${coordinates.destination_lon}&appid=94212e971d0ca97703f8ae892224bbd`,
    type: "get",
    success: function (response) {
        let name = response.name
        let weather = response.weather[0].main
        $("#scene_container").append(
            `
            
                <a-entity gps-entity-place="latitude: ${steps[1].maneuver.location[1]}; longitude: ${steps[1].manuver.location[0]};">
                    <a-entity>
                        <a-text height="50" value="weather 
                    
        )
    }
   })
                    )
                } else {
                    $("#scene_container").append(
                        `
                            <a-entity gps-entity-place="latitude: ${steps[i].maneuver.location[1]}; longitude: ${steps[i].maneuver.location[0]};">
                                <a-image 
                                    name="${instruction}"
                                    src="./assets/ar_start.png"
                                    look-at="#step_${i + 1}"
                                    scale="5 5 5"
                                    id="step_${i}"
                                    position="0 0 0"
                                >
                                </a-image>
                                <a-entity>
                                    <a-text height="50" value="${instruction} (${distance}m)"></a-text>
                                </a-entity>
                            </a-entity>
                        `
                    )
                }
            }
        }
    })
}
