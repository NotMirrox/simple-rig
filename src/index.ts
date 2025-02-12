import { Players, RunService } from "@rbxts/services";

export type SimpleRigR6 = Model & {
	["Left Leg"]: MeshPart & {
		["Left Leg"]: Weld;
		LeftFootAttachment: Attachment;
	};
	Humanoid: AnimationController & {
		Animator: Animator & {
			Sprint: Animation;
			Idle: Animation;
			Jump: Animation;
			Sit: Animation;
			Run: Animation;
			Push: Animation;
			Fall: Animation;
			Climbing: Animation;
			Walk: Animation;
		};
	};
	["Right Leg"]: MeshPart & {
		["Right Leg"]: Weld;
		RightFootAttachment: Attachment;
	};
	Head: MeshPart & {
		Eyes: Decal;
		HatAttachment: Attachment;
		Overlay: Decal;
		Mouth: Decal;
		HairAttachment: Attachment;
		FlashingEye: Attachment & {
			ParticleEmitter: ParticleEmitter;
		};
		FaceFrontAttachment: Attachment;
		FaceCenterAttachment: Attachment;
	};
	Torso: MeshPart & {
		ItemCarryPoint: Attachment;
		WaistCenterAttachment: Attachment;
		BodyBackAttachment: Attachment;
		Neck: Motor6D;
		Torso: Weld;
		RootAttachment: Attachment;
		WaistBackAttachment: Attachment;
		["Left Shoulder"]: Motor6D;
		["Right Shoulder"]: Motor6D;
		["Right Hip"]: Motor6D;
		TShirt: Weld;
		RightCollarAttachment: Attachment;
		LeftCollarAttachment: Attachment;
		BodyFrontAttachment: Attachment;
		["Left Hip"]: Motor6D;
		WaistFrontAttachment: Attachment;
		NeckAttachment: Attachment;
	};
	HumanoidRootPart: Part & {
		RootJoint: Motor6D;
	};
	ClassicClothing: Folder & {
		["Left Leg"]: Part & {
			Mesh: SpecialMesh;
			Decal: Decal;
		};
		["Right Arm"]: Part & {
			Mesh: SpecialMesh;
			Decal: Decal;
		};
		["Left Arm"]: Part & {
			Mesh: SpecialMesh;
			Decal: Decal;
		};
		Torso: Part & {
			Mesh: SpecialMesh;
			Decal: Decal;
		};
		["Right Leg"]: Part & {
			Mesh: SpecialMesh;
			Decal: Decal;
		};
		TShirt: Part & {
			Decal: Decal;
		};
	};
	["Right Arm"]: MeshPart & {
		["Right Arm"]: Weld;
		RightShoulderAttachment: Attachment;
		RightGripAttachment: Attachment;
		ItemHoldGrip: Attachment;
	};
	["Left Arm"]: MeshPart & {
		LeftGripAttachment: Attachment;
		["Left Arm"]: Weld;
		LeftShoulderAttachment: Attachment;
	};
	Accessories: Folder;
};

type LoadRig = Model & {
	["Left Leg"]: Part & {
		LeftFootAttachment: Attachment;
	};
	Humanoid: Humanoid & {
		HumanoidDescription: HumanoidDescription;
	};
	["Right Arm"]: Part & {
		RightShoulderAttachment: Attachment;
		RightGripAttachment: Attachment;
	};
	Head: Part & {
		HatAttachment: Attachment;
		FaceFrontAttachment: Attachment;
		HairAttachment: Attachment;
		face: Decal;
		Mesh: SpecialMesh;
		FaceCenterAttachment: Attachment;
	};
	["Right Leg"]: Part & {
		RightFootAttachment: Attachment;
	};
	Torso: Part & {
		RightCollarAttachment: Attachment;
		WaistCenterAttachment: Attachment;
		BodyBackAttachment: Attachment;
		Neck: Motor6D;
		LeftCollarAttachment: Attachment;
		["Left Hip"]: Motor6D;
		roblox: Decal;
		["Right Hip"]: Motor6D;
		["Left Shoulder"]: Motor6D;
		["Right Shoulder"]: Motor6D;
		BodyFrontAttachment: Attachment;
		WaistBackAttachment: Attachment;
		WaistFrontAttachment: Attachment;
		NeckAttachment: Attachment;
	};
	HumanoidRootPart: Part & {
		RootJoint: Motor6D;
		RootAttachment: Attachment;
	};
	["Left Arm"]: Part & {
		LeftGripAttachment: Attachment;
		LeftShoulderAttachment: Attachment;
	};
};

const r6Rig = script.WaitForChild("rig-r6") as SimpleRigR6;
let loadRig = script.WaitForChild("load-rig") as LoadRig;
if (RunService.IsClient()) {
	const clone = loadRig.Clone();
	loadRig.Destroy();
	loadRig = clone;
}

const BODY_PARTS = {
	"Left Arm": "LeftArm",
	Head: "Head",
	"Left Leg": "LeftLeg",
	"Right Arm": "RightArm",
	"Right Leg": "RightLeg",
	Torso: "Torso",
} as const;

export class SimpleRig {
	public model = r6Rig.Clone();
	public shirt = "";
	public pants = "";
	public shirtGraphic = "";

	public loadUserId(userId: number) {
		const description = Players.GetHumanoidDescriptionFromUserId(userId);
		this.loadHumanoidDescription(description);
	}

	public loadHumanoidDescription(description: HumanoidDescription) {
		loadRig.Humanoid.ApplyDescription(description);
		this.setClassicFace(loadRig.Head.face.Texture);

		const shirt = loadRig.FindFirstChildWhichIsA("Shirt");
		if (shirt) this.setShirt(shirt.ShirtTemplate);

		const pants = loadRig.FindFirstChildWhichIsA("Pants");
		if (pants) this.setPants(pants.PantsTemplate);

		const tShirt = loadRig.FindFirstChildWhichIsA("ShirtGraphic");
		if (tShirt) this.setShirtGraph(tShirt.Graphic);

		const accessories = loadRig.GetChildren().filter((T) => T.IsA("Accessory"));
		for (const accessory of accessories) {
			this.loadAccessory(accessory);
		}

		const bodycolors = loadRig.FindFirstChildWhichIsA("BodyColors");
		if (!bodycolors) return;

		for (const [name, bodyColorName] of pairs(BODY_PARTS)) {
			this.setBodyColor(bodycolors[`${bodyColorName}Color3`], [name]);
		}
	}

	public loadAccessory(accessory: Accessory) {
		const accessoryAttachment = accessory.FindFirstChildWhichIsA(
			"Attachment",
			true,
		);
		if (!accessoryAttachment) {
			warn("No attachments found in accessory. Accessory was not attached.");
			return;
		}

		const attachmentName = accessoryAttachment.Name;
		const attachTo = this.model.FindFirstChild(attachmentName, true);
		if (!attachTo?.IsA("Attachment")) {
			warn(
				`No attachment named ${attachmentName} found in character. Accessory was not attached.`,
			);
			return;
		}

		const Handle = accessory.FindFirstChild("Handle");
		if (!Handle) {
			warn("Attachment has no handle. Accessory was not attached.");
			return;
		}

		Handle.FindFirstChild("AccessoryWeld")?.Destroy();
		const rigidConstraint = new Instance("RigidConstraint");
		rigidConstraint.Parent = Handle;
		rigidConstraint.Attachment0 = attachTo;
		rigidConstraint.Attachment1 = accessoryAttachment;

		accessory.Parent = this.model.Accessories;
	}

	public setClassicFace(textureId: string) {
		this.model.Head.Eyes.Texture = textureId;
		this.model.Head.Mouth.Texture = "rbxassetid://0";
		this.model.Head.Overlay.Texture = "rbxassetid://0";
	}

	public setShirt(textureId: string) {
		this.setTexture(["Torso", "Right Arm", "Left Arm"], textureId);
		this.shirt = textureId;
	}

	public setPants(textureId: string) {
		this.setTexture(["Right Leg", "Left Leg"], textureId);
		this.pants = textureId;
	}

	public setShirtGraph(textureId: string) {
		this.setTexture(["TShirt"], textureId);
		this.shirtGraphic = textureId;
	}

	public setBodyColor(color: Color3, bodyParts: (keyof typeof BODY_PARTS)[]) {
		for (const part of bodyParts) {
			this.model[part].Color = color;
		}
	}

	private setTexture(
		parts: Exclude<keyof typeof this.model.ClassicClothing, keyof Folder>[],
		textureId: string,
	) {
		for (const part of parts) {
			this.model.ClassicClothing[part].Decal.Texture = textureId;
		}
	}

	public Destroy() {
		this.model.Destroy();
	}
}
