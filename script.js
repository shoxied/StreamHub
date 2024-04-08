self = this

self.project = {
    films: ko.observableArray([]),

}

$.ajax({
    url: '',
    type: 'get',
    dataType: 'json'
}).done(response => {
    self.project.films(response.films);
})