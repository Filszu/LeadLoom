'use client';

import { useMemo, useState } from 'react';
import { Toggle } from '@/components/ui/toggle';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { SiWindows } from 'react-icons/si';
import { FcAndroidOs } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import ProgramCard from '@/components/program/ProgramCard';
import { Program } from '@/types';

type Props = {
    programs: Program[];
    userNickname: string;
};

const platformIds = {
    windows: 1,
    android: 2,
    apple: 3,
} as const;

export default function ProgramsClient(props: Props) {
    const [showAll, setShowAll] = useState(true);
    const [showPaused, setShowPaused] = useState(false);
    const [selectedPlatforms, setSelectedPlatforms] = useState<number[]>([]);

    const togglePlatform = (platformId: number) => {
        setSelectedPlatforms((prev) => {
            const exists = prev.includes(platformId);
            const next = exists
                ? prev.filter((p) => p !== platformId)
                : [...prev, platformId];
            // If none selected, revert to ALL
            if (next.length === 0) {
                setShowAll(true);
            } else {
                setShowAll(false);
            }
            return next;
        });
    };

    const onAllToggle = () => {
        setShowAll(true);
        setSelectedPlatforms([]);
    };

    const filteredPrograms = useMemo(() => {
        return props.programs.filter((p) => {
            if (!showPaused && p.status === 'paused') return false;
            if (showAll || selectedPlatforms.length === 0) return true;
            if (!p.platform || !Array.isArray(p.platform)) return false;
            return selectedPlatforms.some((id) => p.platform?.includes(id));
        });
    }, [props.programs, selectedPlatforms, showAll, showPaused]);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
                <Toggle
                    aria-label="Show all platforms"
                    pressed={showAll}
                    onPressedChange={onAllToggle}
                    variant="outline"
                >
                    All
                </Toggle>
                <Toggle
                    aria-label="Windows"
                    pressed={
                        selectedPlatforms.includes(platformIds.windows) &&
                        !showAll
                    }
                    onPressedChange={() => togglePlatform(platformIds.windows)}
                    variant="outline"
                >
                    <SiWindows className="text-xl" />
                </Toggle>
                <Toggle
                    aria-label="Android"
                    pressed={
                        selectedPlatforms.includes(platformIds.android) &&
                        !showAll
                    }
                    onPressedChange={() => togglePlatform(platformIds.android)}
                    variant="outline"
                >
                    <FcAndroidOs className="text-xl" />
                </Toggle>
                <Toggle
                    aria-label="Apple"
                    pressed={
                        selectedPlatforms.includes(platformIds.apple) &&
                        !showAll
                    }
                    onPressedChange={() => togglePlatform(platformIds.apple)}
                    variant="outline"
                >
                    <FaApple className="text-xl" />
                </Toggle>
                <div className="ml-auto flex items-center gap-2">
                    <Checkbox
                        id="show-paused"
                        checked={showPaused}
                        onCheckedChange={(checked) =>
                            setShowPaused(checked === true)
                        }
                    />
                    <Label htmlFor="show-paused" className="cursor-pointer">
                        Show paused
                    </Label>
                </div>
            </div>

            <section className="mb-4 mt-2 flex flex-col gap-4">
                {filteredPrograms.map((programm) => (
                    <ProgramCard
                        key={programm.id}
                        props={programm}
                        nickname={props.userNickname}
                    />
                ))}
            </section>
        </div>
    );
}
