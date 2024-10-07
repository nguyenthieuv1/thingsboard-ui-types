import { BaseData } from '@shared/models/base-data';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export declare class EntityChipsComponent {
    set entity(value: BaseData<EntityId>);
    get entity(): BaseData<EntityId>;
    entityDetailsPrefixUrl: string;
    subEntities: Array<BaseData<EntityId>>;
    private entityValue?;
    private subEntitiesKey;
    update(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityChipsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityChipsComponent, "tb-entity-chips", never, { "entity": { "alias": "entity"; "required": false; }; }, {}, never, never, false, never>;
}
