export class RelatedArchitecture {

    constructor(
        private _architecutreId?: number,
        private _architectureName?: string,
        private _viewId?:number,
        private _viewName? : string,
        private _relatedArchId?: number,
        private _relatedArchName?: string,
        private _relatedViewId?:number,
        private _relatedViewName? : string,
        private _relateTypeId? :number,
        private _relateTypeName? : string  

    ) { }

    get architectureId() { return this._architecutreId }
    set architectureId(value) { this._architecutreId = value }

    get architectureName() { return this._architectureName }
    set architectureName(value) { this._architectureName = value }

    get viewId() { return this._viewId }
    set viewId(value) { this._viewId = value }

    get viewName() { return this._viewName }
    set viewName(value) { this._viewName = value }

    get relatedArchId() { return this._relatedArchId }
    set relatedArchId(value) { this._relatedArchId = value }

    get relatedArchName() { return this._relatedArchName }
    set relatedArchName(value) { this._relatedArchName = value }

    get relatedViewId() { return this._relatedViewId }
    set relatedViewId(value) { this._relatedViewId = value }

    get relatedViewName() { return this._relatedViewName }
    set relatedViewName(value) { this._relatedViewName = value }

    get relateTypeId() { return this._relateTypeId }
    set relateTypeId(value) { this._relateTypeId = value }

    get relateTypeName() { return this._relateTypeName }
    set relateTypeName(value) { this._relateTypeName = value }
}
