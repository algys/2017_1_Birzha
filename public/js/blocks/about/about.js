'use strict';

import template from '../../templates/template';

class About {
    constructor() {
        this.about = template();
    }

    getElement(){
        return this.about;
    }
}

export default About;