import { Lighting, Players, RunService } from "@rbxts/services";

type SimpleRigR15 = Model & {
	LeftLowerArm: MeshPart & {
		LeftElbowRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		LeftElbow: Motor6D;
		OriginalSize: Vector3Value;
		LeftWristRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
	};
	LeftFoot: MeshPart & {
		OriginalSize: Vector3Value;
		LeftAnkleRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		LeftAnkle: Motor6D;
	};
	RightHand: MeshPart & {
		RightWristRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		RightWrist: Motor6D;
		RightGripAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		OriginalSize: Vector3Value;
	};
	HumanoidRootPart: Part & {
		RootRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		OriginalSize: Vector3Value;
	};
	RightLowerLeg: MeshPart & {
		RightKneeRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		RightAnkleRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		RightKnee: Motor6D;
		OriginalSize: Vector3Value;
	};
	LeftUpperLeg: MeshPart & {
		OriginalSize: Vector3Value;
		LeftHip: Motor6D;
		LeftHipRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		LeftKneeRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
	};
	LeftLowerLeg: MeshPart & {
		OriginalSize: Vector3Value;
		LeftKnee: Motor6D;
		LeftAnkleRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		LeftKneeRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
	};
	RightUpperArm: MeshPart & {
		OriginalSize: Vector3Value;
		RightElbowRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		RightShoulderRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		RightShoulderAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		RightShoulder: Motor6D;
	};
	Head: Part & {
		HatAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		OriginalSize: Vector3Value;
		NeckRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		FaceFrontAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		face: Decal;
		HairAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		Neck: Motor6D;
		Mesh: SpecialMesh & {
			OriginalSize: Vector3Value;
		};
		FaceCenterAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
	};
	UpperTorso: MeshPart & {
		RightCollarAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		BodyBackAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		NeckRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		LeftCollarAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		OriginalSize: Vector3Value;
		Waist: Motor6D;
		RightShoulderRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		BodyFrontAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		WaistRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		LeftShoulderRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		NeckAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
	};
	LeftUpperArm: MeshPart & {
		LeftShoulderRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		LeftShoulder: Motor6D;
		LeftShoulderAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		LeftElbowRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		OriginalSize: Vector3Value;
	};
	RightLowerArm: MeshPart & {
		RightWristRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		OriginalSize: Vector3Value;
		RightElbow: Motor6D;
		RightElbowRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
	};
	LeftHand: MeshPart & {
		LeftWrist: Motor6D;
		LeftGripAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		OriginalSize: Vector3Value;
		LeftWristRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
	};
	Humanoid: Humanoid & {
		HumanoidDescription: HumanoidDescription;
	};
	LowerTorso: MeshPart & {
		WaistCenterAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		LeftHipRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		Root: Motor6D;
		RootRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		RightHipRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		OriginalSize: Vector3Value;
		WaistRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		WaistBackAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		WaistFrontAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
	};
	RightUpperLeg: MeshPart & {
		RightKneeRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		OriginalSize: Vector3Value;
		RightHip: Motor6D;
		RightHipRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
	};
	RightFoot: MeshPart & {
		RightAnkleRigAttachment: Attachment & {
			OriginalPosition: Vector3Value;
		};
		RightAnkle: Motor6D;
		OriginalSize: Vector3Value;
	};
};

type SimpleRigR6 = Model & {
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

const r6Rig = script.WaitForChild("r6Rig") as SimpleRigR6;
const r15Rig = script.WaitForChild("r15Rig") as SimpleRigR15;

const loadRig = RunService.IsServer() ? r15Rig : r15Rig.Clone();
loadRig.Parent = Lighting;

export const BODY_PARTS = {
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
