<template>

    <h2 class="ps-2">Search Events</h2>  
    <div class="accordion accordion-flush my-4" id="accordionExample">
        <div class="accordion-item">
            
            <button class="accordion-button fw-bold display-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h5>Filter events</h5>
            </button>

            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">

                    <label for="keywords" class="py-2 fw-bold">Keywords</label>
                    <input class="form-control" type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" placeholder="Search Events" />
                    <span class="fa fa-search searchspan"></span>
                    
                    <div class="row mt-2">

                        <div class="col-12 col-md-4">
                            <label for="date" class="py-2 fw-bold">Date Selected</label>
                            <input id="startDate" class="form-control" type="date" />
                        </div>

                        <div class="col-12 col-md-4 col-sm-6">
                            <label for="genre" class="py-2 fw-bold">Genre</label>
                            <select class="form-select" aria-label="Default select example">
                            <option selected>Select Genre</option>
                            <option value="1">Genre One</option>
                            <option value="2">Genre Two</option>
                            <option value="3">Genre Three</option>
                            </select>  
                        </div>

                        <div class="col-12 col-md-4 col-sm-6">
                            <label for="Venues" class="py-2 fw-bold">Venues</label>
                            <select class="form-select" aria-label="Default select example">
                            <option selected>Select Venue</option>
                            <option value="1">Venue One</option>
                            <option value="2">Venue Two</option>
                            <option value="3">Venue Three</option>
                            </select> 
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>

</template>

<script>
export default ({
    name: 'Search',
    props: ['modelValue'],
    emits: ['update:modelValue']
})
</script>
