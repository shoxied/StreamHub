self = this

self.project = {
    films: ko.observableArray([]),

}

$.ajax({
    url: '217.71.129.139:4529',
    type: 'get',
    dataType: 'json'
}).done(response => {
    self.project.films(response.films);
})